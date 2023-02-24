import { useState } from "react";
import axios from "axios";
import "./login.css";
import Cookies from "js-cookie";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/login", {
        email: email,
        password: password,
      });

      console.log(response.data);
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true"); // set the isLoggedIn item in localStorage
      Cookies.set("userId", response.data.userId, { expires: 0.5 });
      //create a coookie that lasts for 1 second
      Cookies.set("login", "true", { expires: 0.00001 });

      window.location.href = "/profile";
    } catch (error) {
      setErrorMessage(error.response.data);
    }
  };
  
  

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="login-label" htmlFor="email">
            Email address<br></br>
          </label>
          <input
            type="email"
            className="login-input"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="login-label" htmlFor="password">
            Password<br></br>
          </label>
          <input
            type="password"
            className="login-input"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit" className="login-button">
          Login
        </button>
        {/* or user can press the sign up button */}
        <label className="login-label" htmlFor="password">
          Or<br></br>
          <br></br>
        </label>
        <button
          type="button"
          className="login-button"
          onClick={() => (window.location.href = "/create-account")}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Login;
