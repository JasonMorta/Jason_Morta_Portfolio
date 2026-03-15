import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase.jsx';
import { uploadFileToImgBB } from './imgbbUpload.js';

export const PORTFOLIO_PROJECT_COLLECTION = 'protfolioProjects';

function createSlug(value) {
  return String(value ?? '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function normaliseLinks(linkRows = []) {
  return linkRows
    .map((row) => {
      const link = row.link?.trim();
      if (!link) {
        return null;
      }

      const iconType = row.iconType || 'external';
      const defaultTitleMap = {
        repo: 'Repository',
        demo: 'Live demo',
        render: 'Render',
        heroku: 'Heroku',
        external: 'External link',
      };

      return {
        title: row.title?.trim() || defaultTitleMap[iconType] || 'External link',
        type: iconType,
        iconType,
        link,
        status: row.status === 'offline' ? 'offline' : 'live',
      };
    })
    .filter(Boolean);
}

function buildProjectPayload(formValues, uploadedPreviewImages, existingProject = null) {
  const title = formValues.title.trim();
  const slug = createSlug(title);
  const orderValue = Number(formValues.order);
  const fallbackOrder = Number(existingProject?.order ?? existingProject?.id ?? Date.now());

  return {
    id: Number(existingProject?.id ?? fallbackOrder),
    order: Number.isFinite(orderValue) ? orderValue : fallbackOrder,
    title,
    slug,
    skills: (formValues.skills ?? []).filter(Boolean),
    features: (formValues.features ?? []).map((feature) => feature.trim()).filter(Boolean),
    links: normaliseLinks(formValues.links),
    previewImages: uploadedPreviewImages.filter(Boolean),
    createdAt: existingProject?.createdAt ?? new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

async function uploadProjectImages(files, projectTitle) {
  const uploads = [];

  for (const [index, file] of (files ?? []).entries()) {
    const imageUrl = await uploadFileToImgBB(file, `${projectTitle || 'project'}-${index + 1}`);
    uploads.push(imageUrl);
  }

  return uploads;
}

export async function fetchPortfolioProjects() {
  const snapshot = await getDocs(collection(db, PORTFOLIO_PROJECT_COLLECTION));
  return snapshot.docs
    .map((entry) => ({ docId: entry.id, ...entry.data() }))
    .sort((first, second) => {
      const firstOrder = Number(first.order ?? first.id ?? 0);
      const secondOrder = Number(second.order ?? second.id ?? 0);
      return firstOrder - secondOrder;
    });
}

export async function addPortfolioProject(formValues) {
  const uploadedPreviewImages = [
    ...(formValues.existingPreviewImages ?? []),
    ...(await uploadProjectImages(formValues.newImageFiles ?? [], formValues.title)),
  ];

  const payload = buildProjectPayload(formValues, uploadedPreviewImages);
  const created = await addDoc(collection(db, PORTFOLIO_PROJECT_COLLECTION), payload);
  return { docId: created.id, ...payload };
}

export async function updatePortfolioProject(docId, formValues, existingProject) {
  const uploadedPreviewImages = [
    ...(formValues.existingPreviewImages ?? []),
    ...(await uploadProjectImages(formValues.newImageFiles ?? [], formValues.title)),
  ];

  const payload = buildProjectPayload(formValues, uploadedPreviewImages, existingProject);
  await updateDoc(doc(db, PORTFOLIO_PROJECT_COLLECTION, docId), payload);
  return { docId, ...payload };
}

export async function deletePortfolioProject(docId) {
  await deleteDoc(doc(db, PORTFOLIO_PROJECT_COLLECTION, docId));
  return docId;
}
