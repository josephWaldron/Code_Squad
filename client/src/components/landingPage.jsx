import React from "react";
import "./LandingPage.css";
import BeginButton from "./beginButton";

const LandingPage = () => {
  return (
    <>
      <div className="landing-page">
        <h1>Learn to code with engaging lessons and exciting activities!</h1>
        <p className="description">
          A beautifully designed courses to help beginners learn how to code.
        </p>
        <br />
        <BeginButton />
      </div>
    </>
  );
};

export default LandingPage;
