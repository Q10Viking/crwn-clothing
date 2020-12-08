import firebase from 'firebase/app';
import 'firebase/auth';
var firebaseConfig = {
    apiKey: "AIzaSyBJu1xUaKqyYxc43q1_UPw7cTlAuSXWNwE",
    authDomain: "crwn-clothing-81a8a.firebaseapp.com",
    projectId: "crwn-clothing-81a8a",
    storageBucket: "crwn-clothing-81a8a.appspot.com",
    messagingSenderId: "875955077934",
    appId: "1:875955077934:web:e7701bbb5dd7b51dc1f0bf",
    measurementId: "G-S83K1E79L4"
  };

  

  firebase.initializeApp(firebaseConfig);

  const provider = new firebase.auth.GoogleAuthProvider();

  export const signInWithGoogle = e => {
    e.preventDefault();
    firebase.auth().signInWithPopup(provider);
  } 

  export default firebase;