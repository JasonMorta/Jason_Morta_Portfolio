import React, { useState, useContext } from "react";
import { Modal, Button, Form } from "rsuite";
import "./loginCSS.css";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { sharedState } from "../App";
import { produce } from "immer";


const LoginModal = () => {
  const { setState, state } = useContext(sharedState); // Use the context
  const [open, setOpen] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loginStat, setLoginStat] = useState(""); // State for login status message

  const handleOpen = () => setOpen(true);

  const handleLogout = () => {
    setState(produce((state) => {state.isLoggedIn = false})); // Update the global state
    setLoginStat(""); // Clear any previous error messages
    setLoginData({ email: "", password: "" }); // Clear the login data
    
  };

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
      setState(produce((state) => {state.isLoggedIn = true})); // Update the global state
      setLoginStat(""); // Clear any previous error messages
      handleClose(); // Close the modal on successful login
    } catch (error) {
      console.log("Error:", error.message);
      // Set a common login error message
      setLoginStat("Invalid email or password. Please try again.");
    }
  }

  const style = {
    height: "20px",
    padding:" 0px 5px",
    fontSize: "small",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }

  return (
    <>
      <Button
        style={style}
        onClick={()=> {
          !state.isLoggedIn ? handleOpen() : handleLogout() }}
        color="yellow"
        appearance="ghost"
      >
       <span> {state.isLoggedIn ? "LOGOUT" : "LOGIN"}</span>
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
              LOGIN
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
