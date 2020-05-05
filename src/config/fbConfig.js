import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyBwiW5IIpvN3psMwPmzQaEYpzqZQql_dro",
    authDomain: "dispatch-52e93.firebaseapp.com",
    databaseURL: "https://dispatch-52e93.firebaseio.com",
    projectId: "dispatch-52e93",
    storageBucket: "dispatch-52e93.appspot.com",
    messagingSenderId: "455219792565",
    appId: "1:455219792565:web:957b7707e7e71e84b2ccfc",
    measurementId: "G-DLR2RB3BQ4"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;