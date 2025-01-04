
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDJx_bwvSSNEZzgXqXSflAq-30phde7Wgg",
  authDomain: "dashborad-43d1d.firebaseapp.com",
  projectId: "dashborad-43d1d",
  storageBucket: "dashborad-43d1d.firebasestorage.app",
  messagingSenderId: "389301407773",
  appId: "1:389301407773:web:2d0bf2e89b81c1ff37f6f4",
  measurementId: "G-JRL9R32VBC"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);