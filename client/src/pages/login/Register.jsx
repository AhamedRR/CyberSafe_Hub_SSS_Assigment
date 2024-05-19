import React, { useState } from 'react';
import { Container, Form, Button, Row, Col , Modal} from 'react-bootstrap';
import axios from "axios"
import OtpInput from 'react-otp-input';
import {  toast } from 'react-toastify';
import {useNavigate} from "react-router-dom"

import "./login.css"
const RegisterPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [otp, setOTP] = useState('');
  const navigate = useNavigate();

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
    const errorsCopy = { ...errors };
    if (!event.target.value) {
      errorsCopy.firstName = 'Please enter your first name';
    } else {
      delete errorsCopy.firstName;
    }
    setErrors(errorsCopy);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
    const errorsCopy = { ...errors };
    if (!event.target.value) {
      errorsCopy.lastName = 'Please enter your last name';
    } else {
      delete errorsCopy.lastName;
    }
    setErrors(errorsCopy);
  };

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

  const handleSubmit = (event) => {
    event.preventDefault();

    // form validation
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!firstName) {
      errors.firstName = 'Please enter your first name';
    }
    if (!lastName) {
      errors.lastName = 'Please enter your last name';
    }
    if (!emailRegex.test(email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    }
    if (confirmPassword !== password) {
      errors.confirmPassword = 'Passwords do not match';
    }
    setErrors(errors);

    // submit form if no errors
    if (Object.keys(errors).length === 0) {
        RegisterCall();
    }
  };
  const RegisterCall =async () =>{
    await axios.post('http://localhost:8080/user/NewUser', {
      firstname: firstName,
      lastename: lastName,
      email:email.toLowerCase(),
      password:password
    })
    .then(function (response) {
      if(response.status === 201){
        handleShow()
      }
    })
    .catch(function (error) {
      toast.error(error.response.data.message);
    });
  }

  const Generate = async () =>{
    await axios.post('http://localhost:8080/user/resent', {
        email:email.toLowerCase(),
      })
      .then(function (response) {
        if(response.status === 200){
          toast.success(response.data.message);
        }
      })
      .catch(function (error) {
        toast.error(error.response.data.message);
      });
    }
  
 const handleOtp = async ()=>{
    await axios.post('http://localhost:8080/user/otpverfication', {
      otp: otp,
      email:email.toLowerCase(),
    })
    .then(function (response) {
      if(response.status === 200){
        toast.success(response.data.message);
        navigate("/login");
      }
    })
    .catch(function (error) {
      console.log(error)
      toast.error(error.response.data.message);
    });
  }
  return (
    <Container className='login'>
    <Row className="justify-content-md-center mt-5">
      <Col xs={12} md={6} lg={4}>
        <h1 className="text-center mb-4">Register Page</h1>
        <Form onSubmit={handleSubmit}>

          <Form.Group controlId="formBasicEmail" className='section'>
            <Form.Label>FirstName:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your firstName"
              value={firstName}
              onChange={handleFirstNameChange}
              onBlur={handleFirstNameChange}
            />
            {errors.firstName && <Form.Text style={{ color: 'red' }}>{errors.firstName}</Form.Text>}
          </Form.Group>

          <Form.Group controlId="formBasicEmail" className='section'>
            <Form.Label>LastName:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your lastName"
              value={lastName}
              onChange={handleLastNameChange}
              onBlur={handleLastNameChange}
            />
            {errors.lastName && <Form.Text style={{ color: 'red' }}>{errors.lastName}</Form.Text>}
          </Form.Group>


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

          <Button variant="primary" type="submit" className='w-100' block>
            Register
          </Button>
        </Form>
        <div className="text-center mt-2 d-flex">
          <p className="text-secondary">Already have an account?</p>
          <a href="/login" className="link-register">Login</a>
        </div>
      </Col>
    </Row>
    <Modal show={show} onHide={handleClose}  aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='content'>
            <h1 className='otp-tilte'>Enter Your OTP</h1>
            <OtpInput
              value={otp}
              onChange={setOTP}
              numInputs={6}
              renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props} />}
            />
            <div className='d-flex flex-row gap-4'>
              {/* <span >OTP valid for 10 minutes</span> */}
              <span onClick={Generate} style={{color:"red",cursor:"pointer"}}>Didn't recieve code? Resent </span>
            </div>
            <Button className='w-50' variant="primary" onClick={handleOtp} type="submit">Verify</Button>
           
          </div>
        </Modal.Body>
      </Modal>
  </Container>);
}
export default RegisterPage
