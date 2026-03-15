import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase.jsx';

export const PORTFOLIO_SKILLS_COLLECTION = 'portfolioSkills';

export async function fetchPortfolioSkills() {
  const snapshot = await getDocs(collection(db, PORTFOLIO_SKILLS_COLLECTION));
  return snapshot.docs
    .map((entry) => ({ docId: entry.id, ...entry.data() }))
    .sort((first, second) => String(first.title ?? '').localeCompare(String(second.title ?? '')));
}
