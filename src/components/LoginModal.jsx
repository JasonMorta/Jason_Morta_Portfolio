import { useContext, useState } from "react";
import { Button, Form, Modal } from "rsuite";
import styled from "styled-components";
import { signInWithEmailAndPassword } from "firebase/auth";
import { produce } from "immer";
import styles from "./LoginModal.module.css";
import { auth } from "../config/firebase.jsx";
import { sharedState } from "../App.jsx";

const LoginAction = styled(Button)`
  && {
    font-size: 0.82rem;
    border: 1px solid rgba(194, 41, 72, 0.28);
    background: rgba(194, 41, 72, 0.08);
    padding: 0.42rem 0.72rem;
    border-radius: 12px;
    color: #f0ece4;
    transition: transform 180ms ease, background 180ms ease, border-color 180ms ease;
  }

  &&:hover,
  &&:focus,
  &&:active {
    background: rgba(194, 41, 72, 0.2);
    border-color: rgba(194, 41, 72, 0.48);
    transform: translateY(-1px);
    color: #ffffff;
  }
`;

const SubmitButton = styled(Button)`
  && {
    background: rgba(194, 41, 72, 0.88);
    border-radius: 12px;
    border: 1px solid rgba(194, 41, 72, 0.9);
    min-height: 2.9rem;
    margin-top: 0.75rem;
    letter-spacing: 0.08em;
  }
`;

export default function LoginModal({ compact = false }) {
  const { setState, state } = useContext(sharedState);
  const [open, setOpen] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loginStat, setLoginStat] = useState("");

  const handleOpen = () => setOpen(true);

  const handleLogout = () => {
    setState(
      produce((draft) => {
        draft.isLoggedIn = false;
      })
    );
    setLoginStat("");
    setLoginData({ email: "", password: "" });
  };

  const handleClose = () => {
    setOpen(false);
    setLoginStat("");
  };

  async function login() {
    try {
      await signInWithEmailAndPassword(auth, loginData.email, loginData.password);
      setState(
        produce((draft) => {
          draft.isLoggedIn = true;
        })
      );
      setLoginStat("");
      handleClose();
    } catch (error) {
      console.log("Error:", error.message);
      setLoginStat("Invalid email or password. Please try again.");
    }
  }

  const handleSubmit = (event) => {
    event?.preventDefault?.();
    login();
  };

  return (
    <>
      <LoginAction
        onClick={() => {
          if (!state.isLoggedIn) {
            handleOpen();
            return;
          }
          handleLogout();
        }}
        appearance="subtle"
        className={`${styles.loginButton} ${compact ? styles.compactButton : ""}`}
      >
        <span className={styles.loginButtonIconWrap}>
          {state.isLoggedIn ? (
            <svg className={styles.loginButtonIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 12L2 12M2 12L5.5 9M2 12L5.5 15" stroke="#c22948" strokeWidth="0.96" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.3531 21.8897 19.1752 21.9862 17 21.9983M9.00195 17C9.01406 19.175 9.11051 20.3529 9.87889 21.1213C10.5202 21.7626 11.4467 21.9359 13 21.9827" stroke="#c22948" strokeWidth="0.96" strokeLinecap="round" />
            </svg>
          ) : (
            <svg className={styles.loginButtonIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.00098 11.999L16.001 11.999M16.001 11.999L12.501 8.99902M16.001 11.999L12.501 14.999" stroke="#c22948" strokeWidth="0.888" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.3531 21.8897 19.1752 21.9862 17 21.9983M9.00195 17C9.01406 19.175 9.11051 20.3529 9.87889 21.1213C10.5202 21.7626 11.4467 21.9359 13 21.9827" stroke="#c22948" strokeWidth="0.888" strokeLinecap="round" />
            </svg>
          )}
          <span className={styles.loginLabel}>{state.isLoggedIn ? "Logout" : "Login"}</span>
        </span>
      </LoginAction>

      <Modal size="xs" backdrop open={open} onClose={handleClose} className={styles.loginModal}>
        <Modal.Header>
          <Modal.Title>Admin Login</Modal.Title>
          <p className={styles.modalLead}>Sign in to manage portfolio content and project updates.</p>
        </Modal.Header>
        <Modal.Body>
          <Form fluid onSubmit={handleSubmit} className={styles.loginForm}>
            <Form.Group controlId="username-8">
              <Form.ControlLabel>Email</Form.ControlLabel>
              <Form.Control
                onChange={(value) => setLoginData({ ...loginData, email: value })}
                placeholder="name@example.com"
                name="email"
                value={loginData.email}
                autoComplete="username"
              />
            </Form.Group>

            <Form.Group controlId="password-8">
              <Form.ControlLabel>Password</Form.ControlLabel>
              <Form.Control
                placeholder="Enter your password"
                name="password"
                type="password"
                value={loginData.password}
                autoComplete="current-password"
                onChange={(value) => setLoginData({ ...loginData, password: value })}
              />
            </Form.Group>

            <SubmitButton appearance="primary" type="submit" block>
              Login
            </SubmitButton>

            {loginStat && <div className={styles.loginErrorMessage}>{loginStat}</div>}
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
