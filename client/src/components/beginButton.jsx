import React from "react";
import "./BeginButton.css";

const BeginButton = () => {
  // return <button className="begin-button">Click here to begin</button>;
  return (
    <a href="/create-account">
      <button className="begin-button">Click here to begin</button>
    </a>
  );
};

export default BeginButton;
