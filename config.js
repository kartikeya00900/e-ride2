import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDWkXbqwIl9K5XqtDlyGttWp0Ka0ugCiTI",
    authDomain: "e-ride2-be7a3.firebaseapp.com",
    projectId: "e-ride2-be7a3",
    storageBucket: "e-ride2-be7a3.appspot.com",
    messagingSenderId: "768166395706",
    appId: "1:768166395706:web:3b4106b87ef0fc0aad1a03"
  };
  
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
