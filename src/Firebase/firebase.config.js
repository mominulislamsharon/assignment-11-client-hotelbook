// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWGBuUmuRO3pdkSpKjpt9RqVbNdXB91K8",
  authDomain: "hotel-book-9605d.firebaseapp.com",
  projectId: "hotel-book-9605d",
  storageBucket: "hotel-book-9605d.appspot.com",
  messagingSenderId: "473273280031",
  appId: "1:473273280031:web:e2e74e121ae96f525c972a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;