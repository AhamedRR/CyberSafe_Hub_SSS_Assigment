import React from 'react'
import {Link} from "react-router-dom"
import "./footer.css"
import { AiFillFacebook ,AiFillYoutube ,AiFillLinkedin,AiFillTwitterSquare } from "react-icons/ai";
const Footer = () => {
  return (
    <div className='d-flex flex-row justify-content-around footer' style={{backgroundColor:"#f5f5f5"}}>
        <div className='d-flex flex-column footer-content'>
            <h3>Product</h3>
            <div className='d-flex flex-column'>
                <Link to="/platform"><span> The Platform</span> </Link>  
                <Link to="/SecurityAwareness"><span> Security Awareness (CAB)</span></Link>  
                <Link to="/PhishingSimulations"><span>Phishing Simulations (BLAST)</span></Link>  
                <Link to="/ElasticSecurityProgram"><span>Elastic Security Program</span></Link>  
            </div>
        </div>
        <div className='d-flex flex-column footer-content'>
            <h3>Solutions</h3>
            <div className='d-flex flex-column'>
                <Link to="/BankingIndustry"><span> Banking Industry</span> </Link>  
                <Link to="/ManufacturingIndustry"><span> Manufacturing Industry</span></Link>  
                <Link to="/PharmaceuticalIndustry"><span>Pharmaceutical Industry</span></Link>  
            </div>
        </div>
        <div className='d-flex flex-column footer-content'>
            <h3>Resources</h3>
            <div className='d-flex flex-column'>
                <Link to="/CaseStudies"><span> Case Studies</span> </Link>  
                {/* <Link to="/PhishingPlaybook"><span> Phishing Playbook</span></Link>   */}
                <Link to="/PhishingTrainingGuide"><span>Phishing Training Guide</span></Link>  
                {/* <Link to="/SecurityAwarenessGuide"><span>Security Awareness Guide</span></Link>   */}
                <Link to="/Questions"><span>Questions</span></Link>  
                <Link to="/PasswordStrengthMeter"><span>PasswordStrengthMeter</span></Link>  
            </div>
        </div>
        <div className='d-flex flex-column footer-content'>
            <h3>Contact</h3>
            <div className='d-flex flex-row gap-2'>
                <AiFillFacebook size={30} color='#17538F' />
                <AiFillYoutube size={30} color='#17538F' />
                <AiFillLinkedin size={30} color='#17538F' />
                <AiFillTwitterSquare size={30} color='#17538F' />
            </div>
            <div className='d-flex flex-column mt-2'>
                <span>Ahamed RR</span>
                <span>Welimada</span>
            </div>
        </div>
    </div>
  )
}
export default Footer