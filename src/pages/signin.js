import React from "react";

import "./pages-styles/signin.css";
import Fire, { FirebaseContext } from "../firebase";

class SignIn extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      email: "",
      password: ""
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });
    try {
      Fire.auth().signInWithEmailAndPassword(
        this.state.form.email,
        this.state.form.password
      );
      console.log("you succesfully signed in");
      this.props.history.push("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <section className="signin__hero dflex-center">
          <section className="signin__hero-container">
            <article className="signin__greeting dflex-center">
              <h2>Welcome!</h2>
              <p>Get ready to read!</p>
            </article>
            <FirebaseContext.Consumer>
              {() => {
                return (
                  <form
                    className="signin__form dflex-center"
                    onSubmit={this.handleSubmit}
                  >
                    <h2>Sign in</h2>
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
                    <p className="forgot__password">Forgot password?</p>
                    {this.state.error && (
                      <p className="error">{this.state.error.message}</p>
                    )}
                    <button className="btn__tertiary button__signin">
                      Sign in
                    </button>
                  </form>
                );
              }}
            </FirebaseContext.Consumer>
          </section>
        </section>
      </React.Fragment>
    );
  }
}

export default SignIn;
