// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArgzpUEfjdyBxy7FoCE-naHOsRwZGzLBs",
  authDomain: "academia-remanente.firebaseapp.com",
  projectId: "academia-remanente",
  storageBucket: "academia-remanente.appspot.com",
  messagingSenderId: "713588721896",
  appId: "1:713588721896:web:2815e6c53dc965f488e15d",
  measurementId: "G-M5ZW0Q9143",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
