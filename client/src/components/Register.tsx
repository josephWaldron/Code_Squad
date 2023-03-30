import { useState } from "react";
import Cookies from "js-cookie";
import { Alert, Button, Card, Form } from "react-bootstrap";
import backendClient from "../services/backend-client";
import axios from "axios";
interface newUser {
  success: boolean;
  message: string;
  userId: string;
}

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }
    try {
      const response = await backendClient.post<newUser>("/register", {
        firstName,
        lastName,
        email,
        password,
      });
      Cookies.set("hash", response.data.userId, { expires: 1 });
      Cookies.set("new", "true", { expires: 0.0001 });
      window.location.href = "/profile";
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrorMessage(error.response?.data ?? "An unknown error occurred");
      } else {
        setErrorMessage("An unknown error occurred");
      }
    }
  };

  return (
    <>
      {errorMessage && (
        <Alert key="danger" variant="danger">
          {errorMessage}
        </Alert>
      )}
      <Card bg={"dark"}>
        <Form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <Form.Group className="mb-3" controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Last Name"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Sign Up!
          </Button>
          <h3>Or log in</h3>
          <Button variant="primary" href="/login">
            Log In
          </Button>{" "}
        </Form>
      </Card>
    </>
  );
};

export default Register;
