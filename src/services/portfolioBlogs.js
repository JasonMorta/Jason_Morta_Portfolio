import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
import { db } from '../config/firebase.jsx';
import { uploadFileToImgBB } from './imgbbUpload.js';

export const PORTFOLIO_BLOG_COLLECTION = 'Portfolio Blogs';

function createSlug(value) {
  return String(value ?? '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function formatCreatedDate(value) {
  if (value?.trim()) {
    return value.trim();
  }

  return new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

async function uploadBlogBlocks(blocks = [], heading = 'blog') {
  const uploadedBlocks = [];

  for (const [index, block] of blocks.entries()) {
    if (block.type === 'image' && block.imageFile instanceof File) {
      const imageUrl = await uploadFileToImgBB(block.imageFile, `${heading}-${index + 1}`);
      uploadedBlocks.push({
        id: block.id,
        type: 'image',
        imageUrl,
        imageAlt: block.imageAlt?.trim() || heading,
        caption: block.caption?.trim() || '',
      });
      continue;
    }

    if (block.type === 'paragraph') {
      uploadedBlocks.push({
        id: block.id,
        type: 'paragraph',
        text: block.text?.trim() || '',
      });
      continue;
    }

    if (block.type === 'bullets') {
      uploadedBlocks.push({
        id: block.id,
        type: 'bullets',
        items: String(block.itemsText ?? '')
          .split('\n')
          .map((item) => item.trim())
          .filter(Boolean),
      });
      continue;
    }

    if (block.type === 'sectionHeading') {
      uploadedBlocks.push({
        id: block.id,
        type: 'sectionHeading',
        text: block.text?.trim() || '',
      });
    }
  }

  return uploadedBlocks.filter((block) => {
    if (block.type === 'image') {
      return Boolean(block.imageUrl);
    }

    if (block.type === 'bullets') {
      return block.items.length > 0;
    }

    return Boolean(block.text);
  });
}

export async function fetchPortfolioBlogs() {
  const snapshot = await getDocs(collection(db, PORTFOLIO_BLOG_COLLECTION));
  return snapshot.docs
    .map((entry) => ({ docId: entry.id, ...entry.data() }))
    .sort((first, second) => {
      const firstId = Number(first.id ?? 0);
      const secondId = Number(second.id ?? 0);
      return secondId - firstId;
    });
}

export async function fetchPortfolioBlogBySlug(slug) {
  const snapshot = await getDoc(doc(db, PORTFOLIO_BLOG_COLLECTION, slug));
  if (!snapshot.exists()) {
    return null;
  }

  return { docId: snapshot.id, ...snapshot.data() };
}

export async function createPortfolioBlog(formValues) {
  const heading = formValues.heading.trim();
  const slug = createSlug(heading);
  const blogRef = doc(db, PORTFOLIO_BLOG_COLLECTION, slug);
  const existing = await getDoc(blogRef);

  if (existing.exists()) {
    throw new Error('A blog with the same heading slug already exists.');
  }

  const contentBlocks = await uploadBlogBlocks(formValues.contentBlocks ?? [], heading);

  const payload = {
    id: Date.now(),
    slug,
    heading,
    intro: formValues.intro.trim(),
    created: formatCreatedDate(formValues.created),
    contentBlocks,
    createdAt: new Date().toISOString(),
  };

  await setDoc(blogRef, payload);
  return { docId: slug, ...payload };
}
