import axios from 'axios';
import React, { useState } from 'react'
import { Modal,Button,Form} from 'react-bootstrap'
import {  toast } from 'react-toastify';

const NewPassword = (props) => {

const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
const [errors, setErrors] = useState({});

const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    const errorsCopy = { ...errors };
    if (event.target.value.length < 8) {
        errorsCopy.password = 'Password must be at least 8 characters long';
    } else {
        delete errorsCopy.password;
    }
    setErrors(errorsCopy);
    };

const handleConfirmPasswordChange = (event) => {
setConfirmPassword(event.target.value);
const errorsCopy = { ...errors };
if (event.target.value !== password) {
    errorsCopy.confirmPassword = 'Passwords do not match';
} else {
    delete errorsCopy.confirmPassword;
}
setErrors(errorsCopy);
};

const handleSubmit = async () => {
    // form validation
    const errors = {};
    if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    }
    if (confirmPassword !== password) {
      errors.confirmPassword = 'Passwords do not match';
    }
    setErrors(errors);

    // submit form if no errors
    if (Object.keys(errors).length === 0) {
        await axios.post('http://localhost:8080/user/NewPassword', {
            email:props.email,
            password:password
          })
          .then(function (response) {
            if(response.status === 200){
              toast.success(response.data.message);
                setErrors({});
                setPassword('');
                setConfirmPassword('');
                props.handleClose();
            }
          })
          .catch(function (error) {
            toast.error(error.response.data.message);
          });
    }
  };

 const handleClose =()=>{
    setErrors({});
    setPassword('');
    setConfirmPassword('');
    props.handleClose();
 }
  return (
    <Modal  show={props.show} onHide={handleClose}  backdrop="static" centered>
    <Modal.Header closeButton>
      <Modal.Title>Create Password</Modal.Title>
    </Modal.Header>
    <Modal.Body style={{paddingBottom:"0px"}}>
        <Form.Group controlId="formBasicPassword" className='section'>
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              onBlur={handlePasswordChange}
            />
            {errors.password && <Form.Text style={{ color: 'red' }}>{errors.password}</Form.Text>}
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className='section'>
            <Form.Label>ConfirmPassword:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              onBlur={handleConfirmPasswordChange}
            />
            {errors.confirmPassword && <Form.Text style={{ color: 'red' }}>{errors.confirmPassword}</Form.Text>}
          </Form.Group>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="primary" onClick={handleSubmit}> Change </Button>
    </Modal.Footer>
  </Modal>
  )
}

export default NewPassword