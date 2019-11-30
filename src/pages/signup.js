import React from "react";

import "./pages-styles/signup.css";

class SignUp extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="signup__hero dflex-center">
          <article className="signup__hero-container dflex-center">
            <h1 className="signup__title">Sign Up</h1>
            <form className="signup__form">
              <label>Name</label>
              <input className="form__input" type="text" />
              <label>Last Name</label>
              <input className="form__input" type="text" />
              <label>Age</label>
              <input className="form__input" type="number" />
              <label>Email</label>
              <input className="form__input" type="email" />
              <label>Password</label>
              <input className="form__input" type="password" />
            </form>
            <button className="btn__tertiary form__button">Sign Up</button>
          </article>
        </section>
      </React.Fragment>
    );
  }
}

export default SignUp;
