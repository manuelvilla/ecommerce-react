import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC-xhyvyLXiQYi8DIc9fCS-aDg08O8e6AA",
    authDomain: "ecommerce-react-c04fb.firebaseapp.com",
    projectId: "ecommerce-react-c04fb",
    storageBucket: "ecommerce-react-c04fb.appspot.com",
    messagingSenderId: "729890309011",
    appId: "1:729890309011:web:2b0e168843383dd1115e66",
    measurementId: "G-R7E72VYVY8"
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
