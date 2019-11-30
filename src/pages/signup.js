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
              <label className="form__label">Name</label>
              <input className="form__input" type="text" />
              <label className="form__label">Last name</label>
              <input className="form__input" type="text" />
              <label className="form__label">Age</label>
              <input className="form__input" type="number" />
              <label className="form__label">Email</label>
              <input className="form__input" type="email" />
              <label className="form__label">Password</label>
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
