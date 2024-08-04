import React from "react";
import {Radio, RadioGroup, CheckPicker, Uploader, Modal, Button, Form } from "rsuite";
import { IconButton } from "rsuite";
import PlusIcon from "@rsuite/icons/PlusRound";
import SettingHorizontalIcon from '@rsuite/icons/SettingHorizontal';
import { sharedState } from "../../../App";

const NewWorkModal = ({toOpen}) => {

  const value = React.useContext(sharedState);
  const { state } = value;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  const data = [
    "React",
    "Next.js",
    "Vue",
    "Angular",
    "Svelte",
    "Preact",
    "Gatsby",
    "Nuxt",
    "PHP",
    "WordPress",
    "Node",
    "Express",
    "MongoDB",
    "Firebase",
    "Redux",
    "JavaScript",
    "HTML",
    "CSS",
    "SASS",
    "Bootstrap",
    "Material-UI",
    "Tailwind",
    "Styled-Components",
    "React Suite",
    "SQL",
    "GraphQL",
    "Python",
    "Django",
    "Chrome-Extensions",

  ].map((item) => ({ label: item, value: item }));

  return (
    <>
      {state.isLoggedIn ? <IconButton
        appearance="ghost"
        color="orange"
        className={toOpen === "add" ? "add-work" : "edit-work"}
        onClick={handleOpen}
        icon={toOpen === "add" ? <PlusIcon /> : <SettingHorizontalIcon />}
      ></IconButton> : <> </>}

      <Modal size={"fit-content"} backdrop open={open} onClose={handleClose}>
        <Modal.Body>
          <Form layout="flex">
            <Uploader listType="picture" action="uploadURL">
              <Button>IMG</Button>
            </Uploader>

            <Form.Group controlId="password-8">
              <Form.ControlLabel>Title</Form.ControlLabel>
              <Form.Control
                placeholder="Title"
                name="title"
                type="text"
                defaultValue=""
                autoComplete="off"
                onChange={(e) => console.log(e)}
              />

              <br />
              <CheckPicker label="Tech" data={data} style={{ width: 224 }} />
              <br />
              <br />
              {/* 5 Features */}
              <Form.ControlLabel>Feature 1</Form.ControlLabel>
              <Form.Control
                placeholder="Feature 1"
                name="Feature-1"
                type="text"
                defaultValue=""
                autoComplete="off"
                onChange={(e) => console.log(e)}
              />

              <Form.ControlLabel>Feature 2</Form.ControlLabel>
              <Form.Control
                placeholder="Feature 2"
                name="Feature-2"
                type="text"
                defaultValue=""
                autoComplete="off"
                onChange={(e) => console.log(e)}
              />

              <Form.ControlLabel>Feature 3</Form.ControlLabel>
              <Form.Control
                placeholder="Feature 3"
                name="Feature-3"
                type="text"
                defaultValue=""
                autoComplete="off"
                onChange={(e) => console.log(e)}
              />

              <Form.ControlLabel>Feature 4</Form.ControlLabel>
              <Form.Control
                placeholder="Feature 4"
                name="Feature-4"
                type="text"
                defaultValue=""
                autoComplete="off"
                onChange={(e) => console.log(e)}
              />

              <Form.ControlLabel>Feature 5</Form.ControlLabel>
              <Form.Control
                placeholder="Feature 5"
                name="Feature-5"
                type="text"
                defaultValue=""
                autoComplete="off"
                onChange={(e) => console.log(e)}
              />

              <br />
              {/* Links */}
              <Form.ControlLabel>Repo Link</Form.ControlLabel>
              <Form.Control
                placeholder="Repo Link"
                name="Repo-Link"
                type="text"
                defaultValue=""
                autoComplete="off"
                onChange={(e) => console.log(e)}
              />

                <Form.ControlLabel>Live Link</Form.ControlLabel>
                <Form.Control
                    placeholder="Live Link"
                    name="Live-Link"
                    type="text"
                    defaultValue=""
                    autoComplete="off"
                    onChange={(e) => console.log(e)}
                />

<RadioGroup name="radio-group-inline" inline defaultValue="A">
    <Radio value="ON">Live</Radio>
    <Radio value="OFF">Offline</Radio>

  </RadioGroup>


            </Form.Group>
            <Button disabled onClick={handleClose}>Add</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NewWorkModal;
