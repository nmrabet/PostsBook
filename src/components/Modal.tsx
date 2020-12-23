import React, { useState }  from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "./modal.css";

export default function Modal({ show, closeModalHandler }) {
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  function handleChange(e) {
    setEmail(e.target.value)
    setText(e.target.value)
  };

  console.log(email)
  return (
    <div className='modal'>
      <div
        className='modal-wrapper'
        style={{
          transform: show ? "translate(0vh)" : "translate(-100vh)",
          opacity: show ? "1" : "0",
        }}
      >
        <div className='modal-header'>
          <p>Leave a comment!</p>
          <span onClick={closeModalHandler} className='close-modal-btn'>
            X
          </span>
        </div>
        <div className='modal-content'>
          <Form>
            <FormGroup className='form-container'>
              <Label>Email</Label>
              <Input
                type='text'
                placeholder='Enter your Email'
                required
                value={email}
                onChange={handleChange}
              />
              <Label>Comment</Label>
              <textarea
                placeholder='Enter text'
                required
                value={text}
                onChange={handleChange}
              />
            </FormGroup>
            <div className='btn-container'>
              <Button type='submit' className='btn'>
                Submit
              </Button>
              <Button onClick={closeModalHandler} className='cl-btn'>
                Close
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
