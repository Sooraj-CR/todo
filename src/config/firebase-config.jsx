import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB57QfWLxfUS_98zovfIC21n2AsYu4Fazk",
  authDomain: "todo-list-f1b1e.firebaseapp.com",
  projectId: "todo-list-f1b1e",
  storageBucket: "todo-list-f1b1e.appspot.com",
  messagingSenderId: "665868700778",
  appId: "1:665868700778:web:0193b3f31647f848bfce13",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
