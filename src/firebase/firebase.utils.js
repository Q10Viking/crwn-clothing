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

    //  docmentReference 通过get 可以获取snapshot对象
    const userRef = firestore.doc(`/user/${userAuth.uid}`);
    // snapshot的属性exists可以判断当前是否存在该文档
    const userSnapshot = await userRef.get();
    // console.log(userSnapshot);
    // 如果存在文档，通过data可以获取数据，如： {email: "cau1403090523@gmail.com", displayName: "Du Xiao", createAt: t}
    // const data = await userSnapshot.data();
    //console.log(data);

    //  用户不存在则存储数据
    if(!userSnapshot.exists){
      console.log("开始存储数据到firebase");
      const {displayName,email} = userAuth;
      const createAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createAt,
          ...otherUserData
        });
        console.log("数据存储到firebase完毕");
      }catch(error){
        console.log("存储数据失败");
        console.log(error);
      }
    }
    return userRef;
  }

  export default firebase;