// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5Y4uggn5VWuHQfeoAmuzY9g2wS2E4gSA",
  authDomain: "auth-10a.firebaseapp.com",
  projectId: "auth-10a",
  storageBucket: "auth-10a.firebasestorage.app",
  messagingSenderId: "1001533258266",
  appId: "1:1001533258266:web:fd4589287910d7d64defa3",
  measurementId: "G-5FR3Y02H19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);