import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import "./login.css"
import axios from 'axios';
import {  toast } from 'react-toastify';

import EmailModel from './forgot/EmailModel';
import CheckModel from './forgot/CheckModel';
import NewPassword from './forgot/NewPassword';
import Twofactor from './Two Factor/Twofactor';



const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [ishowForgot, setishowForgot] = useState(false);
  const [forgotEmail, setforgotEmail] = useState('');
  const [isCheck, setisCheck] = useState(false);
  const [isShowNewPassword, setisShowNewPassword] = useState(false);
  const [isShowTwofactor, setisShowTwofactor] = useState(false)


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

  const handleSubmit = async (event) => {
    event.preventDefault();

    // form validation
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    }
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      await axios.post('http://localhost:8080/user/login', {
        email: email.toLowerCase(),
        password:password,
      })
      .then(function (response) {
        if(response.status === 200){
          setisShowTwofactor(true);
        }
      })
      .catch(function (error) {
        toast.error(error.response.data.message);
      });
    }
  };

  const handleForgotToggle = ()=>{
    setishowForgot(!ishowForgot)
  }

  const handleIsCheckToggle = ()=>{
   setisCheck(false);
   setforgotEmail("")
  }


const handleSetForgotMail =(email)=>{
    handleForgotToggle()
    setforgotEmail(email);
    setisCheck(true);
  }

const HandleSetNewpassword = () =>{
  setisCheck(false);
  setisShowNewPassword(true);
}

const NewPasswordToggle =()=>{
  setforgotEmail("");
  setisShowNewPassword(false);
  console.log("sss")
  
}

const TwoFactorToggle = () =>{
  setisShowTwofactor(false);
  setEmail("");
  setPassword("");
}

  return (
    <Container className='login'>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6} lg={4}>
          <h1 className="text-center mb-4">Login Page</h1>
          <Form onSubmit={handleSubmit}>
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
            <Button variant="primary" type="submit" className='w-100' block>
              Login
            </Button>
          </Form>

          <div className=" mt-2">
            <span onClick={handleForgotToggle} className="link-forgot-password">Forgot Password?</span>
          </div>
          <div className="text-center mt-2 d-flex">
            <p className="text-secondary">Don't have an account?</p>
            <a href="/register" className="link-register">Register here</a>
          </div>
        </Col>
      </Row>
      <EmailModel show={ishowForgot} handleClose={handleForgotToggle} handleMail={handleSetForgotMail}/>
      <CheckModel  mail={forgotEmail} show={isCheck} handleClose={handleIsCheckToggle}  complete={HandleSetNewpassword}/>
      <NewPassword show={isShowNewPassword} handleClose={NewPasswordToggle} email={forgotEmail} />
      <Twofactor show={isShowTwofactor} handleClose={TwoFactorToggle} email={email}  />
    </Container>
  );
};

export default LoginPage;
