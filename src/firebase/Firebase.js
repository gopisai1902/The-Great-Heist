// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8X5uaviAzR4g-4-QAjAZDogfPSBvAk_Q",
  authDomain: "the-great-heist.firebaseapp.com",
  projectId: "the-great-heist",
  storageBucket: "the-great-heist.appspot.com",
  messagingSenderId: "61568764084",
  appId: "1:61568764084:web:05f8f3f4b338c4ffedefe1",
  measurementId: "G-EMM0S9MZBY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);