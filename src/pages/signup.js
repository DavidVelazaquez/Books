import React from "react";

import "./pages-styles/signup.css";
import undefined from "firebase/empty-import";

class SignUp extends React.Component {
  state = {
    form: {
      name: "",
      lastName: "",
      age: undefined,
      email: "",
      password: "",
      passwordTwo: "",
      error: null
    }
  };

  handleSubmit = e => {};

  handleChange = e => {};

  render() {
    return (
      <React.Fragment>
        <section className="signup__hero dflex-center">
          <article className="signup__hero-container dflex-center">
            <h1 className="signup__title">Sign Up</h1>
            <form className="signup__form" onSubmit={this.handleSubmit}>
              <label>Name</label>
              <input
                className="form__input"
                type="text"
                className="form__label"
                name="firstName"
                onChange={this.handleChange}
                value={}
              />
              <label className="form__label">Last name</label>
              <input
                className="form__input"
                type="text"
                name="lastName"
                onChange={this.handleChange}
                value={}
              />
              <label className="form__label">Email</label>
              <input
                className="form__input"
                type="email"
                name="email"
                conChange={this.handleChange}
                value={}
              />
              <label className="form__label">Password</label>
              <input
                className="form__input"
                type="password"
                name="password"
                onChange={this.handleChange}
                value={}
              />
              <label className="form__label">Confrim password</label>
              <input
                className="form__input"
                type="password"
                name="passwordTwo"
                onChange={this.handleChange}
                value={}
              />
            </form>
            <button className="btn__tertiary form__button">Sign Up</button>
          </article>
        </section>
      </React.Fragment>
    );
  }
}

export default SignUp;
