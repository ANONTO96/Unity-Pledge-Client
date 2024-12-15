// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsmn-rl86aJ3g4oGMYJz_fz-o2mW5sBzg",
  authDomain: "unity-pledge.firebaseapp.com",
  projectId: "unity-pledge",
  storageBucket: "unity-pledge.firebasestorage.app",
  messagingSenderId: "608290812006",
  appId: "1:608290812006:web:be9825e9a95d197039fda7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);