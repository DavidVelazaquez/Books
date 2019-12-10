import React from "react";

import "./pages-styles/signup.css";
import Fire, { FirebaseContext } from "../firebase/";

class SignUp extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordTwo: ""
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });
    try {
      Fire.auth().createUserWithEmailAndPassword(
        this.state.form.email,
        this.state.form.password
      );
      alert("You have created your account");
      this.props.history.push("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        // spreading the values of "this.state.form" with ""..."" and then get new values
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  handleClick = e => {
    console.log("Button Clicked");
  };

  render() {
    // const isInvalid =
    //   this.state.form.password !== this.state.form.passwordTwo ||
    //   this.state.form.password === "" ||
    //   this.state.form.passwordTwo === "" ||
    //   this.state.form.email === "";
    return (
      <section className="signup__hero dflex-center">
        <article className="signup__hero-container dflex-center">
          <h1 className="signup__title">Sign Up</h1>
          <FirebaseContext.Consumer>
            {() => {
              return (
                <form className="signup__form" onSubmit={this.handleSubmit}>
                  <label className="form__label">First name</label>
                  <input
                    className="form__input"
                    type="text"
                    name="firstName"
                    onChange={this.handleChange}
                    value={this.state.form.firstName}
                  />
                  <label className="form__label">Last name</label>
                  <input
                    className="form__input"
                    type="text"
                    name="lastName"
                    onChange={this.handleChange}
                    value={this.state.form.lastName}
                  />
                  <label className="form__label">Email</label>
                  <input
                    className="form__input"
                    type="email"
                    name="email"
                    onChange={this.handleChange}
                    value={this.state.form.email}
                  />
                  <label className="form__label">Password</label>
                  <input
                    className="form__input"
                    type="password"
                    name="password"
                    onChange={this.handleChange}
                    value={this.state.form.password}
                  />
                  <label className="form__label">Confrim password</label>
                  <input
                    className="form__input"
                    type="password"
                    name="passwordTwo"
                    onChange={this.handleChange}
                    value={this.state.form.passwordTwo}
                  />
                  {this.state.error && (
                    <p className="error">{this.state.error.message}</p>
                  )}
                  <button
                    // disabled={isInvalid}
                    onClick={this.handleClick}
                    className="btn__tertiary form__button"
                  >
                    Sign Up
                  </button>
                </form>
              );
            }}
          </FirebaseContext.Consumer>
        </article>
      </section>
    );
  }
}

export default SignUp;
