import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyA4dbviD-WJvVitANijtPMVVcdPG-euQ34",
  authDomain: "invoice-app-9e73c.firebaseapp.com",
  projectId: "invoice-app-9e73c",
  storageBucket: "invoice-app-9e73c.appspot.com",
  messagingSenderId: "93386672923",
  appId: "1:93386672923:web:7440a63cbfeb67d6a1a1be",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
