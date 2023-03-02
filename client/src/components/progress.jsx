import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./progress.css";

const Progress = () => {
  const userId = Cookies.get("userId");
  const [totalJavaStatus, setTotalJavaStatus] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/user/${userId}`
        );
        setTotalJavaStatus(response.data.totalJavaStatus);
      } catch (error) {
        console.error(error);
      }
    };
    if (userId !== undefined) getUser();
  }, [userId]);
  const totalCourses = 1;

  const totalJavaLessons = 8;
  const javaPercentage =
    ((totalJavaStatus - 1) / totalJavaLessons / totalCourses) * 100;
  return (
    <div class="container">
      <ProgressBar>
        <ProgressBar
          variant="java"
          now={javaPercentage}
          label={`Java`}
          key={1}
        />
        <ProgressBar
          variant="cSharp"
          now={javaPercentage}
          label={`C#`}
          key={2}
        />
        <ProgressBar
          variant="python"
          now={javaPercentage}
          label={`Python`}
          key={3}
        />
        <ProgressBar variant="sql" now={javaPercentage} label={`SQL`} key={3} />
      </ProgressBar>
    </div>
  );
};

export default Progress;
