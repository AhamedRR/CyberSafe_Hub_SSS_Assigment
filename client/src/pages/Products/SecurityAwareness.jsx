import React from 'react'

const SecurityAwareness = () => {
  return (
    <div className='SecurityAwareness'>
        <img src="https://cybeready.com/wp-content/uploads/new-cab-banner.jpg" alt="SecurityAwareness" className='w-100' />
        <div className='SecurityAwareness-content'>
            <h3>Run a powerful awareness program.</h3>
            <h3 className='text-success'>Effortlessly.</h3>
            <span> Choose CAB if you're looking to:</span>
            <ul>
                <li> Manage a people-centric program that adapts to your needs</li>
                <li>Drive a positive, engaging, security culture year-round</li>
                <li>Meet security awareness training compliance</li>
            </ul>
        </div>
        <div className='SecurityAwareness-sub-content d-flex flex-row justify-content-center gap-5'>
          <div>
            <img src="https://cybeready.com/wp-content/uploads/security-awareness-training-new2.png.png" alt="" />
          </div>
          <div className='mt-5'>
            <h3 style={{color:"#17538f",fontWeight:'700',paddingBottom:'20px'}}>Deploy your security awareness training program in minutes</h3>
            <ul>
              <li>CAB is an interactive security newsletter, which pairs a ‘knowledge bite’ with a short quiz to reinforce the learning</li>
              <li>The training bites are delivered autonomously to employees’ inbox, removing the burden from your IT team</li>
              <li>Supporting KPIs show employees’ engagements and learning progress, making it easy to report ROI to Management</li>
            </ul>
          </div>

        </div>
    </div>
  )
}

export default SecurityAwareness
