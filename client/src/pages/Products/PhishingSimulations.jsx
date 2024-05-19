import React from 'react'

const PhishingSimulations = () => {
  return (
    <div className='PhishingSimulations'>
    <img src="https://cybeready.com/wp-content/uploads/blast-banner.png" alt="SecurityAwareness" className='w-100' />
    <div className='PhishingSimulations-content'>
        <h3>Phishing training that works.</h3>
        <h3 className='text-success'>Everyday.</h3>
        <span>Choose BLAST - Behavioral Adaptive Simulation & Training if you’re looking to:</span>
        <ul>
            <li>Deploy an automated program built by security awareness experts</li>
            <li>Run an effective solution without interfering with your schedule</li>
            <li>Provide your employees with an empowering training experience</li>
        </ul>
    </div>
    <div className='PhishingSimulations-sub-content' > 
        <h3 className='title'>Reduce Employee Risk with BLAST</h3>
        <span className='text'>
            There are 3 main components of an effective phishing simulations program. 
            BLAST allows you to run them continuously without the hassle.
        </span>
        <div className='d-flex flex-row gap-3 p-4'>
            <div className='content'>
                <img src="https://cybeready.com/wp-content/uploads/feature-1.svg" height={100} width={100} alt="" />
                <h3 className='sub-title'>Run data-driven campaigns</h3>
                <ul>
                    <li>Automated engine suggests the right set of phishing simulations for your organization</li>
                    <li>Award Winning ML engine uses Smart-Assign to assign simulations per department</li>
                    <li>Localization engine runs simulations in 35 different languages in parallel</li>

                </ul>
            </div>
            <div className='content '>
                <img className='' src="https://cybeready.com/wp-content/uploads/feature-2.svg" height={100} width={100} alt="" />
                <h3>Provide adaptive training</h3>
                <ul>
                    <li>Every simulation directs to custom training content that is tailored for the simulation</li>
                    <li>Location-based content personalization makes your employees feel the simulation speaks their language</li>
                    <li>The content is branded according to your organization look and feel</li>

                </ul>
            </div>
            <div className='content '>
                <img src="https://cybeready.com/wp-content/uploads/feature-3.svg" height={100} width={100} alt="" />
                <h3>Leverage risk-based programs</h3>
                <ul>
                    <li>Employees are automatically enrolled in specialized training programs based on their performance</li>
                    <li>Phishing content and level of difficulty is adjusted to the training group needs</li>
                    <li>Gain insights into your risk groups with advanced analytics</li>

                </ul>
            </div>
        </div>
    </div>
</div>
  )
}

export default PhishingSimulations