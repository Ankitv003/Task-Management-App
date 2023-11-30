import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8ug2TiozhxN_sl6I9IzZmQbiaNWZ1Bek",
  authDomain: "react-notes-20a5f.firebaseapp.com",
  projectId: "react-notes-20a5f",
  storageBucket: "react-notes-20a5f.appspot.com",
  messagingSenderId: "1056259539897",
  appId: "1:1056259539897:web:57ca7bb7c8dcb9aeddec68",
  measurementId: "G-7CJHCD2HFZ",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
