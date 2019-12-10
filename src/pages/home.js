import React from "react";
import Fire, { FirebaseContext } from "../firebase";

class LandingPage extends React.Component {
  handleClick = e => {
    e.preventDefault();
    Fire.auth()
      .signOut()
      .then(
        () => {
          console.log("you signed out");
        },
        error => {
          console.log(error.message);
        }
      );
    this.props.history.push("/");
  };

  render() {
    return (
      <React.Fragment>
        <h1>this is home page</h1>
        <FirebaseContext.Consumer>
          {() => {
            return (
              <button className="btn__tertiary" onClick={this.handleClick}>
                Sign out
              </button>
            );
          }}
        </FirebaseContext.Consumer>
      </React.Fragment>
    );
  }
}

export default LandingPage;
