import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };

export default firebase.initializeApp(firebaseConfig);