// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVt1tHL3murYsx8zafnmwP_dF5sJbYEQo",
  authDomain: "book-store-e971a.firebaseapp.com",
  projectId: "book-store-e971a",
  storageBucket: "book-store-e971a.appspot.com",
  messagingSenderId: "247531899918",
  appId: "1:247531899918:web:24ea8cb3c7fa46dbe8c05f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;