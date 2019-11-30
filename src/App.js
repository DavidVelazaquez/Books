import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./style/global.css";
import Home from "./pages/home";
import LandingPage from "./pages/landingPage";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import Layout from "./components/layout";
// import { AuthProvider } from "./firebase/author";
import { FirebaseContext } from "./firebase/context";
import Firebase from "./firebase/firebase";

function App() {
  return (
    <BrowserRouter>
      <FirebaseContext.Provider value={new Firebase()}>
        {/* <AuthProvider> */}
        <Layout>
          <Switch>
            <Route
              exact
              path="/home/signin/landingPage"
              component={LandingPage}
            />
            <Route exact path="/home" component={Home} />
            <Route exact path="/home/signup" component={SignUp} />
            <Route exact path="/home/signin" component={SignIn} />
          </Switch>
        </Layout>
        {/* <Route component={NotFound} /> */}
        {/* </AuthProvider> */}
      </FirebaseContext.Provider>
    </BrowserRouter>
  );
}

export default App;
