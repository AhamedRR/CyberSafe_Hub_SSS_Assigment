import React, { useState } from 'react';
import zxcvbn from 'zxcvbn';
import "./resources.css"
import {Form} from "react-bootstrap"

function PasswordStrengthMeter() {
    const [password, setPassword] = useState('');
  
    const handleChange = (event) => {
      setPassword(event.target.value);
    }
  
    const passwordStrength = zxcvbn(password);
  
    let passwordLabel;
    if (passwordStrength.score === 0 && password === '') {
        passwordLabel = "No Password";
    } else if (passwordStrength.score === 0) {
        passwordLabel = "Very Weak";
    } else if (passwordStrength.score === 1 || passwordStrength.score === 2) {
        passwordLabel = "Weak";
    } else if (passwordStrength.score === 3) {
        passwordLabel = "Strong";
    } else {
        passwordLabel = "Very Strong";
    }
    return (
      <div className='paasswordChecker'>
        <label className='title'>Password Strength Meter</label>
        <Form.Control size='lg' type="password" onChange={handleChange} placeholder="Password" />
        <div className='information'>
          <span className={`text-center ${(passwordLabel === "Weak" || passwordLabel === "Very Weak" )&&'text-danger'}   ${(passwordLabel === "Very Strong" || passwordLabel === "Very Strong") &&'text-success'}`}>{passwordLabel}</span>
          <span className='text-center'>Time to crack: {passwordStrength.crack_times_display.online_no_throttling_10_per_second}</span>
        </div>
      </div>
    );
  }
  export default PasswordStrengthMeter;