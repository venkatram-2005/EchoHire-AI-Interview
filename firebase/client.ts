// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB89PIbgZOosS3yfD7oYOPL1-H3E925jL8",
  authDomain: "ai-echohire.firebaseapp.com",
  projectId: "ai-echohire",
  storageBucket: "ai-echohire.firebasestorage.app",
  messagingSenderId: "586644444110",
  appId: "1:586644444110:web:b41e30d52746216326119f",
  measurementId: "G-28HMLYHBG5"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);

