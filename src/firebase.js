import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB2rbqut5PhJHyL6vjQ6bjzwOJqdW7E4qE",
  authDomain: "my-piggy-goals.firebaseapp.com",
  projectId: "my-piggy-goals",
  storageBucket: "my-piggy-goals.appspot.com",
  messagingSenderId: "800712709808",
  appId: "1:800712709808:web:d8c6deadd29f8bfcbf4d75",
  measurementId: "G-6QW8N029P6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
