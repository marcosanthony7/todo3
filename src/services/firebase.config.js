import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyDxXqfMjlmIAMXelFJDqXL3_kaQhVQcNuM",
  authDomain: "todo-8f32c.firebaseapp.com",
  projectId: "todo-8f32c",
  storageBucket: "todo-8f32c.appspot.com",
  messagingSenderId: "844084546900",
  appId: "1:844084546900:web:e885d39aedf79a483a8cc1"
};

const app = initializeApp(config);

export const db = getFirestore(app);
