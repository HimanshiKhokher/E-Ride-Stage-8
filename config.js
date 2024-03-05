import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyA8P3_n9z2N2AxAKqnD4Dg6bF3H1KUwGCo",
  authDomain: "e-ride-7a45a.firebaseapp.com",
  projectId: "e-ride-7a45a",
  storageBucket: "e-ride-7a45a.appspot.com",
  messagingSenderId: "919282416599",
  appId: "1:919282416599:web:5663926fb112816bbda992"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
