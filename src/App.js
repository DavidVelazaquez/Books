import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./style/global.css";
import Home from "./pages/home";
import LandingPage from "./pages/landingPage";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import Layout from "./components/layout";
// import NotFound from "./pages/notFound";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/home/signup" component={SignUp} />
          <Route exact path="/home/signin" component={SignIn} />
          <Route
            exact
            path="/home/signin/landingPage"
            component={LandingPage}
          />
        </Switch>
      </Layout>
      {/* <Route component={NotFound} /> */}
    </BrowserRouter>
  );
}

export default App;
