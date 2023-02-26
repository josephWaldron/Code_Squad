import React, { useState } from "react";
import axios from "axios";
import "./create-acount.css";
import Cookies from "js-cookie";
const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      setSuccessMessage("");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/addUser", {
        firstName,
        lastName,
        email,
        password,
      });

      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setErrorMessage("");
      setSuccessMessage("Account created successfully!");
      // do something with successful login, such as redirecting to dashboard
      //redirect to lgoin page
      window.location.href = "/profile";
    } catch (error) {
      if (error.response.status === 409) {
        setErrorMessage("Email already exists. Please try a different one.");
        setSuccessMessage("");
      } else {
        setErrorMessage("An error occurred. Please try again later.");
        setSuccessMessage("");
      }
    }
  };

  //check if user cookie was aready created
  if (Cookies.get("userId")) {
    //create a cookie that lasts for 1 second
    Cookies.set("login", "true", { expires: 0.00001 });
    window.location.href = "/profile";
  }

  return (
    <div className="signup-form">
      <form onSubmit={handleSubmit}>
        <h2 className="signup">Sign Up</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Email Address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Sign Up
        </button>
      </form>
      <h2 className="signup">Or</h2>
      <button
        type="button"
        className="login-button"
        onClick={() => (window.location.href = "/login")}
      >
        Log In
      </button>
    </div>
  );
};

export default SignUp;
