import {getFirestore} from "@firebase/firestore"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhrGnpqOSmgy4W6GbYf9k0A2qZc_eFWKs",
  authDomain: "controlmedicamentos-6bf57.firebaseapp.com",
  projectId: "controlmedicamentos-6bf57",
  storageBucket: "controlmedicamentos-6bf57.appspot.com",
  messagingSenderId: "202249547367",
  appId: "1:202249547367:web:564a05d54cc2642c426ec2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dbFirebase=getFirestore(app);