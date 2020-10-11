import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCxzseIDx2OykZKPrbrGLA-f4J0rl1dUIY",
  authDomain: "lite-e4409.firebaseapp.com",
  databaseURL: "https://lite-e4409.firebaseio.com",
  projectId: "lite-e4409",
  storageBucket: "lite-e4409.appspot.com",
  messagingSenderId: "434146425065",
  appId: "1:434146425065:web:c4e9bb3b31139a8bded878",
  measurementId: "G-S253YQLJEB",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth };
