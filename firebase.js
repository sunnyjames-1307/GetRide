// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyDd17msB2pLiRbnDg9S40oshD5XYv467KI",
  authDomain: "carpoolapp-355012.firebaseapp.com",
  projectId: "carpoolapp-355012",
  storageBucket: "carpoolapp-355012.appspot.com",
  messagingSenderId: "1096859562810",
  appId: "1:1096859562810:web:c543df8418202780dd1603",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
