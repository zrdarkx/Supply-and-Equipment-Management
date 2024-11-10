// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyClyGaGQ6G4W4dc_F6pHlKbfRWRuJ3CeE0",
  authDomain: "equips-46b96.firebaseapp.com",
  projectId: "equips-46b96",
  storageBucket: "equips-46b96.appspot.com",
  messagingSenderId: "695168182787",
  appId: "1:695168182787:web:0a8d3ffeb86ec594713c36",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { app, db };
