import app from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  doCreateUserWithEmailAndPassword = (email, password) => {
    this.auth.createUserWithEmailAndPassword(email, password);
  };

  doSignInWithEmailAndPassword = (email, password) => {
    this.auth.signInWithEmailAndPassword(email, password);
  };

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => {
    this.auth.sendPasswordResetEmail(email);
  };

  doPasswordUpdate = password => {
    this.auth.updatePassword(password);
  };
}

export default Firebase;

// const firebaseConfig = {
//   apiKey: "AIzaSyDl1jrSiB2wq78jOXJ96CeCei86vBN3-SA",
//   authDomain: "find-books-30879.firebaseapp.com",
//   databaseURL: "https://find-books-30879.firebaseio.com",
//   projectId: "find-books-30879",
//   storageBucket: "find-books-30879.appspot.com",
//   messagingSenderId: "136018449567",
//   appId: "1:136018449567:web:cc5efe8ecce7a8b76d7eaa"
// };
