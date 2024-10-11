// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtnDqrzifnA1iQVgRT7lSt5_RJs2BWUpY",
  authDomain: "cellband-f2afd.firebaseapp.com",
  projectId: "cellband-f2afd",
  storageBucket: "cellband-f2afd.appspot.com",
  messagingSenderId: "568301107622",
  appId: "1:568301107622:web:51ad7d95d2fe8785d03767",
  measurementId: "G-NCZJJPEV35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);