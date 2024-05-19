import React ,{useState}from 'react'
import { Navbar,Container,Nav,NavDropdown,Button,Modal,Form} from 'react-bootstrap'
import "./nav.css"
import logo from "../../img/logo.png"
import {useNavigate} from "react-router-dom"
import axios from 'axios';
import {  toast } from 'react-toastify';

const NavBarComponent = () => {

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const [message, setmessage] = useState()
const navigate = useNavigate();
const logout = ()=>{
    localStorage.clear();
    navigate('/')
}
const onchange =(e)=>{
    setmessage(e.target.value)
}

const submit = async () =>{
    await axios.post('http://localhost:8080/user/message', {
        message: message,
      })
      .then(function (response) {
        if(response.status === 200){
         handleClose()
         toast.success('Mail successfully sent');
         setmessage(null)
        }
      })
      .catch(function (error) {
        toast.error(error.response.data.message);
      });
}
  return (
    <Navbar  fixed="top"  variant="dark" expand="lg">
    <Container>
        <div className='logo'>
            <Navbar.Brand href="/"><img width={380} height={80} src={logo} alt="logo" /></Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='ml-0'>
        <Nav className="me-auto">
            <NavDropdown title="Products" id="basic-nav-dropdown">
                <NavDropdown.Item href="/platform">The Platform</NavDropdown.Item>
                <NavDropdown.Item href="/SecurityAwareness">Security Awareness (CAB)</NavDropdown.Item>
                <NavDropdown.Item href="/PhishingSimulations">Phishing Simulations (BLAST)</NavDropdown.Item>
                <NavDropdown.Item href="/ElasticSecurityProgram">Elastic Security Program</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Solutions" id="basic-nav-dropdown">
                <NavDropdown.Item href="/BankingIndustry">Banking Industry</NavDropdown.Item>
                <NavDropdown.Item href="/ManufacturingIndustry ">Manufacturing Industry</NavDropdown.Item>
                <NavDropdown.Item href="/PharmaceuticalIndustry">Pharmaceutical Industry</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Resources" id="basic-nav-dropdown">
                <NavDropdown.Item href="/CaseStudies">Case Studies</NavDropdown.Item>
                {/* <NavDropdown.Item href="/PhishingPlaybook">Phishing Playbook</NavDropdown.Item> */}
                <NavDropdown.Item href="/PhishingTrainingGuide">Phishing Training Guide</NavDropdown.Item>
                <NavDropdown.Item href="/SecurityAwarenessGuide">Security Awareness Guide</NavDropdown.Item>
                <NavDropdown.Item href="/Questions">Questions</NavDropdown.Item>
                <NavDropdown.Item href="/PasswordStrengthMeter">PasswordStrengthMeter</NavDropdown.Item>
            </NavDropdown>
           {
            !localStorage.getItem("token") &&
            <NavDropdown title="Login" id="basic-nav-dropdown">
                <NavDropdown.Item href="/register">Sign up</NavDropdown.Item>
                <NavDropdown.Item href="/login">Login</NavDropdown.Item>
            </NavDropdown>
           } 
            <NavDropdown title="Contact Us" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={handleShow}>Send mail </NavDropdown.Item>
            </NavDropdown>

            {
            localStorage.getItem("token") && 
            <NavDropdown title={localStorage.getItem("name")} id="basic-nav-dropdown">
                <NavDropdown.Item onClick={logout}>logout </NavDropdown.Item>
            </NavDropdown>
            }  
            </Nav>
           
        </Navbar.Collapse>
        <Modal show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Contact us</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{paddingBottom: '0px'}}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={5}  value={message} placeholder='message' onChange={onchange} />
        </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submit}>Send</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  </Navbar>
  )
}

export default NavBarComponent