import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

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
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  export const signInWithGoogle = e => {
    e.preventDefault();
    auth.signInWithPopup(provider);
  } 


  export const createUserProfileDocument = async (userAuth,otherUserData) => {
    if(!userAuth) return null;
    const userRef = firestore.doc(`/user/${userAuth.uid}`);
    const userSnapshot = await userRef.get();

    if(!userSnapshot.exists){
      const {displayName,email} = userAuth;
      const createAt = new Date();
      await userRef.set({
        id:userAuth.uid,
        displayName,
        email,
        createAt,
        ...otherUserData
      })
    }
    return userRef;
  }

  export default firebase;