
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxINTrrNEXlqtVaYj2sUY9JRH3nSb_V2o",
  authDomain: "mini-blog-388e4.firebaseapp.com",
  projectId: "mini-blog-388e4",
  storageBucket: "mini-blog-388e4.appspot.com",
  messagingSenderId: "912181244351",
  appId: "1:912181244351:web:1a13c173e776fe222f310a"
};

const app = initializeApp(firebaseConfig);

const db= getFirestore(app)

export {db}