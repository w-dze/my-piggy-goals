import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import WelcomeBack from "../animation/WelcomeBack";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const results = await signInWithEmailAndPassword(auth, email, password);
      const userCredential = {
        userID: results.user.uid,
        email: results.user.email,
        isAuth: true,
      };
      localStorage.setItem("auth", JSON.stringify(userCredential));
      console.log("Logged in user:", userCredential.userID);
    } catch (error) {
      setError(error.message);
      alert("Error logging in", error);
    }
  };

  const handleNoUser = async () => {
    try {
      navigate("/signup"); // Redirect to signup
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <>
      <WelcomeBack />
      <div className="login-container">
        <h2>Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={handleLogin}>
            Login
          </Button>

          <span className="underline">
            Not Registered?
            <Button className="sbtButton" variant="link" onClick={handleNoUser}>
              Create Account
            </Button>
          </span>
        </Form>
      </div>
    </>
  );
}

export default Login;
