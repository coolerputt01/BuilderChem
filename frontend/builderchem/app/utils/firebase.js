// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFI_Rl_eCr9Ayp7GnQdrQlAKazYhMoNTA",
  authDomain: "builderchem-533cd.firebaseapp.com",
  projectId: "builderchem-533cd",
  storageBucket: "builderchem-533cd.firebasestorage.app",
  messagingSenderId: "943887699418",
  appId: "1:943887699418:web:9c57a90c10ab83bc39c4e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db }