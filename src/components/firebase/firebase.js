import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDcZYIkmH6lKSGoj5vSzI-2XjYjZQmV0sI",
  authDomain: "safe-mail-e1bda.firebaseapp.com",
  projectId: "safe-mail-e1bda",
  storageBucket: "safe-mail-e1bda.appspot.com",
  messagingSenderId: "1047945877177",
  appId: "1:1047945877177:web:ca74d3c658d6bff7df6d68",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };
