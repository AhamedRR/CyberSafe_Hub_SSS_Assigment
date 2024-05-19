import React from 'react'

const Content = () => {
  return (
    <div className='sub-body'>
        <h1 className='text-center'>Fully Managed Cyber Security Awareness Training Platform</h1>
        <div className='contents'>
            <div className='sub-content'>
                <div className='text-content w-50 d-flex flex-column'>
                    <span className='title'>Train Every Employee, Every Month</span>
                    <div>
                        <span className='text'>
                            Deploy 8x more phishing simulations (compared with industry average) and ongoing <span> cybersecurity awareness bites</span> without any IT effort. 
                            Training sessions are automatically distributed and personalized per employees’ role, location, and performance to achieve 100% continuous workforce
                            training and increased engagement.
                        </span>
                    </div>
                </div>
                <div className='right-content w-50'>
                    <img src="https://cybeready.com/wp-content/uploads/training.png" width={500} height={300} alt="" />
                </div>
            </div>
            <div className='sub-content'>
                <div className='right-content w-50'>
                    <img src="	https://cybeready.com/wp-content/uploads/actionable.png" width={500} height={350} alt="" />
                </div>
                <div className='left-content w-50 d-flex flex-column'>
                    <span className='title'>Say Goodbye to Spreadsheets</span>
                
                    <span className='text'>
                        CybeReady’s real-time data platform enables 
                        performance monitoring and improvement tracking 
                        of your entire organization with powerful dashboards and
                         reports.
                    </span>
                 
                </div>
            </div>
            <div className='sub-content'>
                <div className='left-content w-50 d-flex flex-column'>
                    <span className='title'>Change Your Corporate Employee Behavior Towards Cyberattacks</span>
                    <span className='text'>
                    Our end-to-end corporate <span>cyber security training platform </span>  is driven by data science and is proven to change employee behavior,
                     decrease employee high-risk group by 82%, and increase employee resilience score by 5x, within months of training.
                    </span>
                </div>
                <div className='right-content w-50'>
                    <img src="https://cybeready.com/wp-content/uploads/personalized.png" width={500} height={350} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Content