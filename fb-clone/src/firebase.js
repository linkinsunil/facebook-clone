import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAZdnCxIKFlaCk-aIl6IQiUl8hosvY-qug",
  authDomain: "facebook-clone-4f380.firebaseapp.com",
  projectId: "facebook-clone-4f380",
  storageBucket: "facebook-clone-4f380.appspot.com",
  messagingSenderId: "706756883317",
  appId: "1:706756883317:web:cce90971eb2af6d090193c",
  measurementId: "G-D8M4PMBSFM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;