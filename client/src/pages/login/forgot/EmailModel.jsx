import axios from 'axios';
import React, { useState } from 'react'
import { Button,Modal,Form } from 'react-bootstrap'
import {  toast } from 'react-toastify';


const EmailModel = (props) => {
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});


    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        const errorsCopy = { ...errors };
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(event.target.value)) {
          errorsCopy.email = 'Please enter a valid email address';
        } else {
          delete errorsCopy.email;
        }
        setErrors(errorsCopy);
      };

      const handleSubmit = async () => {
        
        // form validation
        const errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          errors.email = 'Please enter a valid email address';
        }
        setErrors(errors);
    
        if (Object.keys(errors).length === 0) {
          await axios.post('http://localhost:8080/user/forgot', {
            email: email.toLowerCase(),
          })
          .then(function (response) {
            if(response.status === 200){
             props.handleMail(response.data.userId);
             setEmail("")
            }
          })
          .catch(function (error) {
            toast.error(error.response.data.message);
          });
        }
      };

    const handleClose =()=>{
        setEmail("");
        setErrors({});
        props.handleClose()
    }
  return (
    <Modal className='forgotModel' show={props.show} onHide={handleClose}  backdrop="static"     centered>
        <Modal.Header closeButton>
          <Modal.Title>Forgot Password</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{paddingBottom:"0px"}}>
            <Form.Group controlId="formBasicEmail" className='section'>
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                onBlur={handleEmailChange}
              />
              {errors.email && <Form.Text style={{ color: 'red' }}>{errors.email}</Form.Text>}
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}> Send </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default EmailModel