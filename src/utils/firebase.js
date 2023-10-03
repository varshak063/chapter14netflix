// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTR6MaYPi4xCvtvEn1uVw1yMtDwWHwbpw",
  authDomain: "netflixgpt-fe67c.firebaseapp.com",
  projectId: "netflixgpt-fe67c",
  storageBucket: "netflixgpt-fe67c.appspot.com",
  messagingSenderId: "130122040650",
  appId: "1:130122040650:web:abd2cfb4e919cdf7236db3",
  measurementId: "G-9KFB11RH3F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();