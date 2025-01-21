import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU4GSDJKW80TnHsK0xBSiRH0Py0Pu-SrA",
  authDomain: import.meta.env.AuthDomain,
  projectId: import.meta.env.ProjectId,
  storageBucket: import.meta.env.StorageBucket,
  messagingSenderId: import.meta.env.MessagingSenderId,
  appId: import.meta.env.AppId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
