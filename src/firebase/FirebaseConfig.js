
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuZKPkLM7oRzH8lemwnbALnHroZ7zwYSg",
  authDomain: "countdown-board-5a7a2.firebaseapp.com",
  projectId: "countdown-board-5a7a2",
  storageBucket: "countdown-board-5a7a2.appspot.com",
  messagingSenderId: "518779817011",
  appId: "1:518779817011:web:14943d3b2369187c372746"
};

// Initialize Firebasea
const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };