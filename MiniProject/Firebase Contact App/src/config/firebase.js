// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDoWHdBGUbr3PjsYbql1K2H8GjN9xoGpA",
  authDomain: "fir-contact-app-fe9c2.firebaseapp.com",
  projectId: "fir-contact-app-fe9c2",
  storageBucket: "fir-contact-app-fe9c2.firebasestorage.app",
  messagingSenderId: "461377625257",
  appId: "1:461377625257:web:40af3f354cd5f06d0dddb8",
  measurementId: "G-8C2GPS199T",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
