import React from "react";
import { Modal, Button, Form } from "rsuite";

const LoginModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    
    setOpen(false)
    };
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

      <Modal size={'fit-content'} backdrop open={open} onClose={handleClose}>
        <Modal.Body>
          <Form layout="flex">
            <Form.Group controlId="username-8">
              <Form.ControlLabel>Email</Form.ControlLabel>
              <Form.Control 
              onChange={(e)=> console.log(e)} 
              placeholder="Email" 
              name="email" 
              defaultValue=""
              />
            </Form.Group>

            <Form.Group controlId="password-8">
              <Form.ControlLabel>Password</Form.ControlLabel>
              <Form.Control
                placeholder="Password"
                name="password"
                type="password"
                defaultValue=""
                autoComplete="off"
                onChange={(e)=> console.log(e)}
              />
            </Form.Group>
            <Button onClick={handleClose} >Login</Button>
          </Form>
        </Modal.Body>
    
      </Modal>
    </>
  );
};

export default LoginModal;
