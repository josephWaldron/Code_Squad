import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import ProgressBar from "react-bootstrap/ProgressBar";

const JavaProgress = () => {
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
  const totalJavaLessons = 2;
  const javaPercentage = (totalJavaStatus / totalJavaLessons) * 100;
  return (
    <div class="container">
      <ProgressBar>
        <ProgressBar
          variant="java"
          now={javaPercentage}
          label={`Java`}
          key={1}
        />
      </ProgressBar>
    </div>
  );
};

export default JavaProgress;
