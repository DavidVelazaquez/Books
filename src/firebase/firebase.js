import app from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDl1jrSiB2wq78jOXJ96CeCei86vBN3-SA",
  authDomain: "find-books-30879.firebaseapp.com",
  databaseURL: "https://find-books-30879.firebaseio.com",
  projectId: "find-books-30879",
  storageBucket: "find-books-30879.appspot.com",
  messagingSenderId: "136018449567",
  appId: "1:136018449567:web:cc5efe8ecce7a8b76d7eaa"
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

  // doPasswordReset = () => this.auth.sendPasswordResetEmail(email);

  // doUpdatePassword = () => {
  //   this.auth.currentUser.updatePassword(password);
  // };
}

export default Firebase;
