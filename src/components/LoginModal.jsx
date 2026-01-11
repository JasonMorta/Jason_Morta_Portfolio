import React, { useState, useContext } from "react";
import { Modal, Button, Form } from "rsuite";
import "./loginCSS.css";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { sharedState } from "../App";
import { produce } from "immer";
import styled from "styled-components";

/**
 * Styled login button
 * - Uses RSuite Button under the hood
 * - Adjusts font-size ONLY on mobile
 */
const LoginButton = styled(Button)`
  /* Default font size (desktop/tablet) */
  font-size: 0.8rem;
  border: none;
  padding: 1px 8px !important;

  /* Mobile override */
  @media (max-width: 768px) {
    font-size: 10px;
    padding: 0px 5px !important;
  }

  /* No hover border */
  &:hover, &:focus, &:active {
    border: none !important;
    box-shadow: none !important;
  }

  /* Set inner span height */
  span {
    height: 20px;
  }

  svg {
    width: 20px;
    height: 20px;
  }

  /* Set svg hover effects */
  svg {
    transition: transform 0.2s;
  }

  svg:hover {
    transform: scale(1.1);
  }

`;

const LoginModal = () => {
  const { setState, state } = useContext(sharedState); // Use the context
  const [open, setOpen] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loginStat, setLoginStat] = useState(""); // State for login status message

  const handleOpen = () => setOpen(true);

  const handleLogout = () => {
    setState(
      produce((state) => {
        state.isLoggedIn = false;
      })
    ); // Update the global state
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
      setState(
        produce((state) => {
          state.isLoggedIn = true;
        })
      ); // Update the global state
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
      <LoginButton
        onClick={() => {
          !state.isLoggedIn ? handleOpen() : handleLogout();
        }}
       
        color="yellow"
        appearance="ghost"
      >
        <span>
          {" "}
          {state.isLoggedIn ? (
            <svg
             
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M15 12L2 12M2 12L5.5 9M2 12L5.5 15"
                  stroke="#c22948"
                  stroke-width="0.9600000000000002"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.3531 21.8897 19.1752 21.9862 17 21.9983M9.00195 17C9.01406 19.175 9.11051 20.3529 9.87889 21.1213C10.5202 21.7626 11.4467 21.9359 13 21.9827"
                  stroke="#c22948"
                  stroke-width="0.9600000000000002"
                  stroke-linecap="round"
                ></path>{" "}
              </g>
            </svg>
          ) : (
            <svg
          
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M2.00098 11.999L16.001 11.999M16.001 11.999L12.501 8.99902M16.001 11.999L12.501 14.999"
                  stroke="#c22948"
                  stroke-width="0.8879999999999999"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.3531 21.8897 19.1752 21.9862 17 21.9983M9.00195 17C9.01406 19.175 9.11051 20.3529 9.87889 21.1213C10.5202 21.7626 11.4467 21.9359 13 21.9827"
                  stroke="#c22948"
                  stroke-width="0.8879999999999999"
                  stroke-linecap="round"
                ></path>{" "}
              </g>
            </svg>
          )}
        </span>
      </LoginButton>

      <Modal size={"fit-content"} backdrop open={open} onClose={handleClose}>
        <Modal.Body>
          <Form layout="flex">
            <Form.Group controlId="username-8">
              <Form.ControlLabel>Email</Form.ControlLabel>
              <Form.Control
                onChange={(e) => setLoginData({ ...loginData, email: e })} // Capture email input
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
                onChange={(e) => setLoginData({ ...loginData, password: e })} // Capture password input
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
