// import { db } from "../config/firebase";
// import { collection, getDocs } from "firebase/firestore";


// const getSkillIcons = async () => {
//   const docRef = doc(db, 'portfolioData', 'YML4ToApwoPbNRoAeZVS');
//   const docSnap = await getDoc(docRef);
  
//   if (docSnap.exists()) {
//     const data = docSnap.data();
//     const skillIcons = data.skillIcons;
//     console.log(skillIcons);
//     return skillIcons;
//   } else {
//     console.log('No such document!');
//     return [];
//   }
// };

// // Example usage
// getSkillIcons().then((skillIcons) => {
//   console.log(skillIcons);
// });
