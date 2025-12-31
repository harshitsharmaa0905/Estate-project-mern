// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTz24Zd1wDjdObKaGqavRS716ttjBVECI",
  authDomain: "estate-project-f5129.firebaseapp.com",
  projectId: "estate-project-f5129",
  storageBucket: "estate-project-f5129.firebasestorage.app",
  messagingSenderId: "699827079017",
  appId: "1:699827079017:web:0c7c1b85e56f482b74dff8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); // ✅ named export
export const storage = getStorage(app);

export default app;