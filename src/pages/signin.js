import React from "react";

import "./pages-styles/signin.css";

class SignIn extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="signin__hero dflex-center">
          <section className="signin__hero-container">
            <article className="signin__greeting dflex-center">
              <h2>Welcome!</h2>
              <p>Get ready to read!</p>
            </article>
            <form className="signin__form dflex-center">
              <h2>Sign in</h2>
              <label className="form__label">Email</label>
              <input className="form__input" type="email" />
              <label className="form__label">Password</label>
              <input className="form__input" type="password" />
            </form>
          </section>
        </section>
      </React.Fragment>
    );
  }
}

export default SignIn;
