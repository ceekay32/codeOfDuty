import firebase from "firebase";
import "firebase/storage";
import "firebase/auth";
import {
  getAuth,
  getRedirectResult,
  FacebookAuthProvider,
} from "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBMEtBBrtJt0gLkh1PsekHwLPBaLWDBOEo",
  authDomain: "connect-ca4c1.firebaseapp.com",
  projectId: "connect-ca4c1",
  storageBucket: "connect-ca4c1.appspot.com",
  messagingSenderId: "722283663185",
  appId: "1:722283663185:web:c2b139cda70ae6d130cd70",
  measurementId: "G-RFYQ87VT14",
};

const fire = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();

export const signInWithGoogle = () => {
  auth
    .signInWithPopup(googleProvider)
    .then((res) => {
      console.log("here bro");
      console.log(res.user);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export default fire;
