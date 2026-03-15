// Temporary one-time Firestore upload helper for portfolio blogs.
// Usage example:
// 1. Import this function into a temporary admin-only action.
// 2. Run it once after confirming Firebase credentials and Firestore rules are correct.
// 3. Remove this file after the collection has been seeded.

import { collection, doc, getDocs, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../config/firebase.jsx";
import portfolioBlogSeed from "../components/data/portfolioBlogSeed.js";

const COLLECTION_NAME = "Portfolio Blogs";

export async function seedPortfolioBlogsToFirestore() {
  const collectionRef = collection(db, COLLECTION_NAME);
  const existingSnapshot = await getDocs(collectionRef);

  if (!existingSnapshot.empty) {
    throw new Error(
      'The "Portfolio Blogs" collection already contains documents. Clear it first if you want to seed again.'
    );
  }

  const uploadTasks = portfolioBlogSeed.map((blog) => {
    const blogRef = doc(collectionRef, blog.slug);

    return setDoc(blogRef, {
      ...blog,
      seededAt: serverTimestamp(),
    });
  });

  await Promise.all(uploadTasks);

  return {
    count: portfolioBlogSeed.length,
    collectionName: COLLECTION_NAME,
  };
}
