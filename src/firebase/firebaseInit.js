import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnFQgXbd7PnWcbKYjAynuD66PxAhlUhyc",
  authDomain: "invoice-track.firebaseapp.com",
  projectId: "invoice-track",
  storageBucket: "invoice-track.appspot.com",
  messagingSenderId: "142079081863",
  appId: "1:142079081863:web:bb090a1eacf4806dc46722"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
