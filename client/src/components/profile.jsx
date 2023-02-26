import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
import "./profile.css"; // import the CSS file
import LoginSuccessful from "./login-sucess";
import { useEffect, useState } from "react";
import Progress from "./progress";

const Profile = () => {
  const userId = Cookies.get("userId");
  const justLoggedIn = Cookies.get("login");
  const [user, setUser] = useState(null); // set up a user state to hold the data
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/user/${userId}`
        );
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    if (userId !== undefined) getUser();
  }, [userId]);

  const handleLogout = () => {
    Cookies.remove("userId");
    //go back to home page
    //toDo create a
    window.location.href = "/";
  };

  if (!user) {
    return <div>Please log in first</div>;
  }

  //check if the last page was login
  if (justLoggedIn === "true") {
    return (
      <div className="profile-container">
        <LoginSuccessful />
        <div className="profile-header">
          <h1>Profile</h1>
          <h1>Progress</h1>
          <Progress />
        </div>
        <div className="profile-field">
          <div className="profile-label">First Name:</div>
          <div className="profile-value">{user.firstName}</div>
        </div>
        <div className="profile-field">
          <div className="profile-label">Last Name:</div>
          <div className="profile-value">{user.lastName}</div>
        </div>
        <div className="profile-field">
          <div className="profile-label">Email</div>
          <div className="profile-value">{user.email}</div>
        </div>
        <div className="profile-field">
          <div className="profile-label">Picture Path:</div>
          <div className="profile-value">{user.picturePath}</div>
        </div>
        <div className="profile-field">
          <div className="profile-label">Expert:</div>
          <div className="profile-value">{user.expert ? "Yes" : "No"}</div>
        </div>
        <button className="profile-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    );
  } else
    return (
      <div>
        <h1>Progress</h1>
        <Progress />
        <br />
        <div className="profile-container">
          <div className="profile-header">
            <h1>Profile</h1>
          </div>
          <div className="profile-field">
            <div className="profile-label">First Name:</div>
            <div className="profile-value">{user.firstName}</div>
          </div>
          <div className="profile-field">
            <div className="profile-label">Last Name:</div>
            <div className="profile-value">{user.lastName}</div>
          </div>
          <div className="profile-field">
            <div className="profile-label">Email:</div>
            <div className="profile-value">{user.email}</div>
          </div>
          <div className="profile-field">
            <div className="profile-label">Picture Path:</div>
            <div className="profile-value">{user.picturePath}</div>
          </div>
          <div className="profile-field">
            <div className="profile-label">Expert:</div>
            <div className="profile-value">{user.expert ? "Yes" : "No"}</div>
          </div>

          <button className="profile-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    );
};

export default Profile;
