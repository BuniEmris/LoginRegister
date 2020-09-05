import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAr5uexKfq-eYn5KVTLfYYQl1lutzdGb60",
  authDomain: "authregister-1e15e.firebaseapp.com",
  databaseURL: "https://authregister-1e15e.firebaseio.com",
  projectId: "authregister-1e15e",
  storageBucket: "",
  messagingSenderId: "716535229907",
  appId: "1: 716535229907: web: 37fca933d6e24abf761326",
};

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
