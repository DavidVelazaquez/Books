import React from "react";

class SignUp extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section>
          <form>
            <label>Name</label>
            <input type="text" />
            <label>Last Name</label>
            <input type="text" />
            <label>Age</label>
            <input type="number" />
            <label>Email</label>
            <input type="email" />
            <label>Password</label>
            <input type="password" />
          </form>
          <button>Sign Up</button>
        </section>
      </React.Fragment>
    );
  }
}

export default SignUp;
