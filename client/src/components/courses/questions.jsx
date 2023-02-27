import { CodeBlock, a11yDark } from "react-code-blocks";
import "./questions.css";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

function Questions(input) {
  const userId = Cookies.get("userId");
  const handleComplete = () => {
    //update the user's totalJavaStatus to correct value
    const setStatus = async () => {
      try {
        const lessonid = String(input.question[0].lesson);
        const response = await axios.put(
          `http://localhost:3001/updateJavaStatus/${userId}/${lessonid}`
        );
        console.log(response);
        //direct the user back to the course page
        window.location.href = "/courses/java";
      } catch (error) {
        console.error(error);
      }
    };
    setStatus();
  };
}

export default Questions;
