import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import PreLoader from "../animation/PreLoader";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userCredential = {
        userID: result.user.uid,
        email: result.user.email,
        isAuth: true,
      };
      localStorage.setItem("auth", JSON.stringify(userCredential));
      console.log("Logged in user:", userCredential.userID);
    } catch (error) {
      alert("You already have an account.", error);
    }
  };

  const handleHaveUser = async () => {
    try {
      navigate("/login"); // Redirect to login
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <>
      <PreLoader />
      <div className="bodyarea">
        <Form className="signup-form">
          <h2>Sign Up</h2>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email: </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password: </Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button
            className="sbtBtn"
            variant="primary"
            type="submit"
            onClick={handleSignUp}
          >
            Sign Up
          </Button>

          <span className="underline">
            Have an Account?
            <Button
              className="sbtButton"
              variant="link"
              onClick={handleHaveUser}
            >
              Login
            </Button>
          </span>
        </Form>
      </div>
    </>
  );
}

export default SignUp;
