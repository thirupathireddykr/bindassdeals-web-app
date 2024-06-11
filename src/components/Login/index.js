import React, { Component } from "react";
import bcrypt from "bcryptjs";
import "./index.css";

class Login extends Component {
  state = {
    username: "",
    password: "",
    errorMessage: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {history} = this.props;
    const { username, password } = this.state;

    const user = JSON.parse(localStorage.getItem(username));

    if (!user) {
      this.setState({
        errorMessage: "Details not found, please register an account",
      });
    } else {
      const isPasswordValid = bcrypt.compareSync(password, user.password);
      if (!isPasswordValid) {
        this.setState({ errorMessage: "Invalid details" });
      } else {
        history.push("/home");
      }
    }
  };

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <h2>Login</h2>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
            required
          />
          <button type="submit">Login</button>
          {this.state.errorMessage && (
            <p className="error">{this.state.errorMessage}</p>
          )}
        </form>
      </div>
    );
  }
}

export default Login;
