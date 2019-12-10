import React from "react";
import ReactDOM from "react-dom";

import { FirebaseContext } from "./firebase";
import App from "./app";

const container = document.getElementById("root");

ReactDOM.render(
  <FirebaseContext.Provider>
    <App />
  </FirebaseContext.Provider>,
  container
);
