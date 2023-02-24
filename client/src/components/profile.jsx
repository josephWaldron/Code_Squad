import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import "./profile.css"; // import the CSS file
import LoginSuccessful from "./login-sucess";

const Profile = () => {
  const [user, setUser] = useState(null);
  const userId = Cookies.get("userId");
  const justLoggedIn = Cookies.get("login");

  //get user from server
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
    getUser();
  }, [userId]);

  const handleLogout = () => {
    Cookies.remove("userId");
    localStorage.setItem("isLoggedIn", "false"); // set the isLoggedIn item in localStorage
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
        <div className="profile-field">
          <div className="profile-label">Total Status:</div>
          <div className="profile-value">{user.totalStatus}</div>
        </div>
        <div className="profile-field">
          <div className="profile-label">Module Status:</div>
          <div className="profile-value">{user.moduleStatus}</div>
        </div>
        <div className="profile-field">
          <div className="profile-label">Lesson Status:</div>
          <div className="profile-value">{user.lessonStatus}</div>
        </div>
        <button className="profile-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    );
  } else
    return (
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
        <div className="profile-field">
          <div className="profile-label">Total Status:</div>
          <div className="profile-value">{user.totalStatus}</div>
        </div>
        <div className="profile-field">
          <div className="profile-label">Module Status:</div>
          <div className="profile-value">{user.moduleStatus}</div>
        </div>
        <div className="profile-field">
          <div className="profile-label">Lesson Status:</div>
          <div className="profile-value">{user.lessonStatus}</div>
        </div>
        <button className="profile-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    );
};

export default Profile;
