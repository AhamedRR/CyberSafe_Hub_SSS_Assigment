import axios from 'axios';
import React, { useState } from 'react'
import { Modal,Button } from 'react-bootstrap';
import {  toast } from 'react-toastify';
import OtpInput from 'react-otp-input';

const CheckModel = (props) => {
    
    const [otp, setOTP] = useState('');

    const handleOtp = async ()=>{
        await axios.post('http://localhost:8080/user/forgot/send', {
          otp: otp,
         email:props.mail,
        })
        .then(function (response) {
          if(response.status === 200){
           setOTP('');
           props.complete();
          }
        })
        .catch(function (error) {
          console.log(error)
          toast.error(error.response.data.message);
        });
      }

    const handleClose = () =>{
        setOTP('');
        props.handleClose();
    }

    const Generate = async () =>{
        await axios.post('http://localhost:8080/user/resent', {
             email:props.mail,
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
  return (
    <Modal show={props.show} onHide={handleClose}  aria-labelledby="contained-modal-title-vcenter"
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
  )
}

export default CheckModel