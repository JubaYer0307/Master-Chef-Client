// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlJj81MIUPW7Bz2VDJp5nzys_p7V6LHMg",
  authDomain: "superfood-c4cc0.firebaseapp.com",
  projectId: "superfood-c4cc0",
  storageBucket: "superfood-c4cc0.appspot.com",
  messagingSenderId: "386784378147",
  appId: "1:386784378147:web:8b2c3ee18751007006a096"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;