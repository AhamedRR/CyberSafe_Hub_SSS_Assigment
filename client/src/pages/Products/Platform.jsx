import React from 'react'
import "./Product.css"
const Platform = () => {
  return (
   <div className='Platform'>
        <div className='Platform-header'>
            <h3>An Autonomous Security Awareness Program Built For The Enterprise</h3>
            <spa>A complete, fully-managed training program that transforms security culture. Pairing the most advanced training solutions:</spa>
        </div>
        <video style={{ width: '100%'}}  src='https://cybeready.com/wp-content/uploads/cybeready-compressed-2.mp4'  loop autoPlay ></video>
        <div className='Platform-content'>
            <h3>3C – CISO Communication Center</h3>
            <div className='Platform-content-body'>
                <div className='Platform-content-body-item w-50' >
                    <span className='title'>Program Kick-off Announcement</span>
                    <span className='text'>
                        Designed to introduce the new cyber security training program to all employees, 
                        make them aware of the training goals, understand its importance and embrace it.
                    </span>
                    <span className='title'>Onboarding letter to new employees</span>
                    <span className='text'>
                        Any new employee is automatically identified by the platform and receives a personal welcome email, 
                        informing them on the program automatic enrolment.
                    </span>
                </div>
                <div className='Platform-content-body-item w-50 '>
                    <span className='title'>Smart Reporting & Presentations</span>
                    <ul itemType='circle'>
                        <li>Activity report   
                            <span> Delivered to the security team on a weekly basis with details on the activity progress to date.
                            </span> 
                        </li>
                        <li>End of campaign report  
                           <span> Delivered to the security team at the end of each phishing
                             campaign, and includes a summary of results,
                              as well as a comparative analysis to the previous two campaigns.
                            </span>
                        </li>
                        <li>
                            Periodic Business Review 
                            <span> Designed to eliminate the stress associated board meeting/management presentation the report highlights the progress made to date (i.e. program ROI) using advanced KPIs such as Risk Group Distribution, Serial Clickers and Employee Resilience Score. Charts, dates and KPIs can be easily customized in the PowerPoint file provided. The report is 
                            delivered on a quarterly basis or on-demand (generated instantly from the dashboard).
                            </span>  
                        </li>
                    </ul>

                </div>
            </div>
        </div>
   </div>
  )
}

export default Platform