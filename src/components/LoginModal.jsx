import React, { useState, useContext } from "react";
import { Modal, Button, Form } from "rsuite";
import "./loginCSS.css";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { sharedState } from "../App";


const LoginModal = () => {
  const { setIsLoggedIn } = useContext(sharedState); // Use the context
  const [open, setOpen] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loginStat, setLoginStat] = useState(""); // State for login status message

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    setLoginStat("");

  };

  async function login() {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginData.email,
        loginData.password
      );
      console.log("Logged in user:", userCredential.user);
      setIsLoggedIn(true); // Update parent state
      setLoginStat(""); // Clear any previous error messages
      handleClose(); // Close the modal on successful login
    } catch (error) {
      console.log("Error:", error.message);
      // Set a common login error message
      setLoginStat("Invalid email or password. Please try again.");
    }
  }

  return (
    <>
      <Button
        style={{ height: "30px" }}
        onClick={handleOpen}
        color="yellow"
        appearance="ghost"
      >
        LOGIN
      </Button>

      <Modal size={"fit-content"} backdrop open={open} onClose={handleClose}>
        <Modal.Body>
          <Form layout="flex">
            <Form.Group controlId="username-8">
              <Form.ControlLabel>Email</Form.ControlLabel>
              <Form.Control
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e })
                } // Capture email input
                placeholder="Email"
                name="email"
                defaultValue={loginData.email}
              />
            </Form.Group>

            <Form.Group controlId="password-8">
              <Form.ControlLabel>Password</Form.ControlLabel>
              <Form.Control
                placeholder="Password"
                name="password"
                type="password"
                defaultValue={loginData.password}
                autoComplete="off"
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e })
                } // Capture password input
              />
            </Form.Group>

            <Button
              color="red"
              appearance="primary"
              onClick={login} // Call the login function
            >
              Login
            </Button>
      
            {loginStat && ( // Display error message if it exists
              <div className="login-error-message">{loginStat}</div>
            )}
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LoginModal;
