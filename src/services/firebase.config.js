import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyCNMvTk53j6OZUQORkHYAjrc2WHc4UZphU",
  authDomain: "todo-2db96.firebaseapp.com",
  projectId: "todo-2db96",
  storageBucket: "todo-2db96.appspot.com",
  messagingSenderId: "130332342886",
  appId: "1:130332342886:web:c5a3af1ccce2b1e90a8ba7"
};

const app = initializeApp(config);

export const db = getFirestore(app);
