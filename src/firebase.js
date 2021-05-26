import firebase from "firebase";
// Your web app's Firebase configuration
var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAwCgk5LT6vupDfVlhe5s62RN0o9ZVH-Ls",
  authDomain: "react-contact-form-536fc.firebaseapp.com",
  projectId: "react-contact-form-536fc",
  storageBucket: "react-contact-form-536fc.appspot.com",
  messagingSenderId: "684597807922",
  appId: "1:684597807922:web:277f95f41dc237810ea52b",
});

var db = firebaseApp.firestore();
export { db };
