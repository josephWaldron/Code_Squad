import { useState } from "react";
import backendClient from "../services/backend-client";
import axios from "axios";
import Cookies from "js-cookie";
import { Alert, Button, Card, Form } from "react-bootstrap";

interface LoginResponse {
  success: boolean;
  message: string;
  userId: string;
}

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
      const response = await backendClient.post<LoginResponse>("/login", {
        email,
        password,
      });
      var expirationDate = new Date();
      expirationDate.setTime(expirationDate.getTime() + 30 * 60 * 1000);
      Cookies.set("hash", response.data.userId, { expires: expirationDate });
      const expirationTime = new Date(Date.now() + 5000);
      Cookies.set("new", "true", { expires: expirationTime });
      window.location.href = "/profile";
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data ?? "An unknown error occurred");
      } else {
        setError("An unknown error occurred");
      }
    }
  };
  return (
    <>
      {error && (
        <Alert key="danger" variant="danger">
          {error}
        </Alert>
      )}
      <Card bg={"dark"}>
        <Form onSubmit={handleSubmit}>
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
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>

          <h3>Don't have an account?</h3>
          <Button variant="primary" href="/register">
            Register
          </Button>
        </Form>
      </Card>
    </>
  );
};
export default Login;
