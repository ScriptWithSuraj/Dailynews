import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBvux6EkwQIfKi16rr7sQW0YS5lJmlozKc",
  authDomain: "fir-auth-9ba19.firebaseapp.com",
  projectId: "fir-auth-9ba19",
  storageBucket: "fir-auth-9ba19.appspot.com",
  messagingSenderId: "955731543249",
  appId: "1:955731543249:web:a0466220b9f9c4b0f231f0",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
