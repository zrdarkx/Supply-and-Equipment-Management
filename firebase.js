// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDfh17TZpIhggmwAu86Z4AagCsb-fG5HhE",
  authDomain: "supply-and-equipment-8df9f.firebaseapp.com",
  projectId: "supply-and-equipment-8df9f",
  storageBucket: "supply-and-equipment-8df9f.appspot.com",
  messagingSenderId: "224080937906",
  appId: "1:224080937906:web:2e42711af2aee00b6a1aab",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { app, db };
