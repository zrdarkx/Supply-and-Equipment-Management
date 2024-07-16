// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyB4pY4VvXCHSSBn3PiiYEwUHBZqZ0oCnes",
  authDomain: "supply-and-equipment-7fedf.firebaseapp.com",
  projectId: "supply-and-equipment-7fedf",
  storageBucket: "supply-and-equipment-7fedf.appspot.com",
  messagingSenderId: "157574366433",
  appId: "1:157574366433:web:2c12c7d311333f701ca3a0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { app, db };
