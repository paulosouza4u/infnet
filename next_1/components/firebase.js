import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "",
  authDomain: "estudos-de-jamstack-2b3a1.firebaseapp.com",
  projectId: "estudos-de-jamstack-2b3a1",
  storageBucket: "estudos-de-jamstack-2b3a1.firebasestorage.app",
  messagingSenderId: "949833628187",
  appId: "1:949833628187:web:33636aa460b38994e356be"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);