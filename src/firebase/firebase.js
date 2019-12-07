import React from "react";

import app from "firebase/app";

const config = {
  apiKey: "AIzaSyDl1jrSiB2wq78jOXJ96CeCei86vBN3-SA",
  authDomain: "find-books-30879.firebaseapp.com",
  databaseURL: "https://find-books-30879.firebaseio.com",
  projectId: "find-books-30879",
  storageBucket: "find-books-30879.appspot.com",
  messagingSenderId: "136018449567",
  appId: "1:136018449567:web:cc5efe8ecce7a8b76d7eaa"
};

class Firebase extends React.Component {
  render() {
    return app.initializeApp(config);
  }
}

export default Firebase;
