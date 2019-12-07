import React from "react";
import ReactDOM from "react-dom";

import Firebase, { FirebaseContext } from "./firebase/";
import App from "./app";

const container = document.getElementById("root");

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  container
);
