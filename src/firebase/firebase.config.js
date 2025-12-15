// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEFas8E5882hNPbfxwgcw8n2UqY1rPRLM",
  authDomain: "dragon-news-332d3.firebaseapp.com",
  projectId: "dragon-news-332d3",
  storageBucket: "dragon-news-332d3.firebasestorage.app",
  messagingSenderId: "427492996604",
  appId: "1:427492996604:web:3f43c1161cc911fd022e79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app