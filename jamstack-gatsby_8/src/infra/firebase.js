import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaS...",
  authDomain: "gats...",
  projectId: "gats...",
  storageBucket: "gats...",
  messagingSenderId: "885...",
  appId: "1:885..."
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
