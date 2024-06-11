import React, { Component } from "react";
import bcrypt from "bcryptjs";
import "./index.css";

class Registration extends Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { history } = this.props;
    
    const { username, password } = this.state;

    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = { username, password: hashedPassword };

    localStorage.setItem(username, JSON.stringify(user));
    history.push("/login");
  };

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <h2>Register</h2>
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
          <button type="submit">
            Create Account
          </button>
        </form>
      </div>
    );
  }
}

export default Registration;
