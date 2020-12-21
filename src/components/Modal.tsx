import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "./modal.css";

export default function Modal({ show, closeModalHandler }) {
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
              <Label>Name</Label>
              <Input
                type='text'
                name='name'
                placeholder='Enter your Email'
                required
              ></Input>
              <Label>Comment</Label>
              <textarea
                name='text'
                placeholder='Enter text'
                required
              ></textarea>
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
