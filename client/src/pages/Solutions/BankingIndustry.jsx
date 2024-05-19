import React from 'react'
import "./solution.css"
import img from "../../img/locations.png"
import { Card } from 'react-bootstrap'


const BankingIndustry = () => {
  return (
    <div className='BankingIndustry'>
        <div className='BankingIndustry-hero'>
            <div className='BankingIndustry-hero-left w-50'>
                <h3 className='title'>Banks Have Unique Security Challenges</h3>
                <h3 className='sub-title'>Onboard a Cybersecurity Awareness Training Program that sets you up for success</h3>
                <span>
                 Banking & Financial Institutions are 300x more vulnerable to cyber attacks than any other sector. SafeCyberLearn’s
                 training solution gets your employees fit for the front lines.
                </span>
            </div>
            <div className='BankingIndustry-hero-right w-50'>
                <img src="https://cybeready.com/wp-content/uploads/hero_img01.svg" alt="BankingIndustry" />
            </div>
        </div>
        <div className='BankingIndustry-hero-contents'>
            <h3 className='title'>Our Learning Platform Sets You Up for Success</h3>
            <div className='BankingIndustry-hero-content'>
                <div className='BankingIndustry-hero-sub-content'>
                    <div className='image'>
                        <img src="https://CybeReady.com/wp-content/uploads/work-chart.svg" alt="" />
                    </div>
                    <div>
                        <span>Ease of Operation</span>
                        <ul>
                            <li>SaaS platform facilitates easy onboarding</li>
                            <li>Azure Active Directory & Google Workspace integration</li>
                            <li>Operation and reporting takes just one-hour per quarter</li>
                        </ul>

                    </div>
                </div>
                <div className='BankingIndustry-hero-sub-content'>
                    <div className='image'>
                        <img src="https://CybeReady.com/wp-content/uploads/work-head.svg" alt="" />
                    </div>
                    <div>
                        <span>Adaptive at scale</span>
                        <ul>
                            <li>100% of employees trained every single month</li>
                            <li>Short training sessions adapt per employee group</li>
                            <li>A fully-managed solution with training expertise built-in</li>
                        </ul>

                    </div>
                </div>
                <div className='BankingIndustry-hero-sub-content'>
                    <div className='image'>
                        <img src="https://CybeReady.com/wp-content/uploads/work-messenger.svg" alt="" />
                    </div>
                    <div>
                        <span>Risk Reduction</span>
                        <ul>
                            <li>Proven 5x increase in resilience to cyber attacks</li>
                            <li>High-Risk employee group reduced by 80%</li>
                            <li>Real-time KPI's for tracking & reporting progress</li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
        <div className='rbs-content'>
            <div className='img-cpntent'>
                <img src="https://CybeReady.com/wp-content/uploads/quotation-img01@2x.jpg" height={500} width={700} alt="" />
            </div>
            <div className='text-content'>
                <span>
                    “With the help of SafeCyberLearn we can display the data in a more positive 
                    frame and talk about employee resilience and how their behaviors have 
                    changed over time. That was a really big reason why I decided to switch 
                    from other suppliers and it’s in line with the way that NatWest group is 
                    moving: valuing our colleagues' skills more, building them up and helping
                     them be successful”.</span>
                <span className='title-name'>
                    Lesley Marjoribanks
                </span>
                <span>
                    Awareness Training Lead at RBS (NatWest)
                </span>
                <img src="https://CybeReady.com/wp-content/uploads/rbs.svg" alt="rbs" width={100} height={100} />
            </div>
        </div>
        <div className='attacks-container'>
            <img src={img} alt=""/>
        </div>
        <div className='vulnerabilities'>
            <h3 className='text-center'>Banks have unique training needs and vulnerabilities</h3>
            <span>
                Your employees are smart, talented, and committed to keeping your customer data secure —but they may not be prepared to face the evolving cyber threats they are exposed to every day. Your employee training program should mimic the hackers: It should target employees repeatedly at organic points during their working routine, creating many short opportunities for engagement and success.
            </span>
            <div className='vulnerabilities-header'>
                <h2 >Banks have unique training challenges </h2>
                <h2 >SafeCyberLearn has the solution</h2>
            </div>
            <div className='vulnerabilities-contents d-flex flex-column'>
                <div className='d-flex flex-row gap-3'>
                    <Card  className='w-50'>
                        <Card.Body>
                            <Card.Title>In-person training is not practical</Card.Title>
                            <Card.Text>
                            Your bank is likely to have a distributed workforce, making it almost impossible to get everyone in the same physical place at the same time. Different branches typically have unique traits and characteristics, which will require different styles of training. However, creating multiple training programs is a drain on resources.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card  className='w-50' >
                        <Card.Body>
                            <Card.Title>SafeCyberLearn’s solution is fully automated</Card.Title>
                            <Card.Text>
                            The platform distributes training campaigns daily based on real-time data, so 100% of your workforce gets trained every single month, no matter where they’re based. SafeCyberLearn’s training content is automatically customized and localized per industry, geography and language, and evolves as users interact with the training content, based on their levels of engagement and performance.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div  className='d-flex flex-row gap-3' >
                    <Card className='w-50' >
                        <Card.Body>
                            <Card.Title>Old Habits die hard</Card.Title>
                            <Card.Text>
                            Bank employees cover roles from IT and tellers, to sales and marketers - and many of them have worked with a specific organization for years, building up a certain way of doing things. The challenge is delivering training content that boosts organizational security posture, positively impacting the behavior of these long-term employees, without having a negative impact on their productivity or morale.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='w-50' >
                        <Card.Body>
                            <Card.Title>SafeCyberLearn’s solution offers a personalized learning experience</Card.Title>
                            <Card.Text>
                            Training sessions autonomously adapt per employees’ individual learning pace so that high-risk employees receive high-frequency training. Continuous learning, repetition, and a range of experiences and scenarios challenge employees’ abilities over and over again. The result? New habits, and a well-trained staff who naturally make smarter choices.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div  className='d-flex flex-row gap-3 pb-3' >
                    <Card className='w-50'>
                        <Card.Body>
                            <Card.Title>Legacy infrastructures lead to legacy mindsets</Card.Title>
                            <Card.Text>
                            Banks often rely on integrated legacy technologies guarding critical data and applications, and yet are also embracing digital transformation roadmaps. In this hybrid reality, and with tight compliance regulations to consider, they can only afford to implement technology that’s highly secure and reduces complexity.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='w-50' >
                        <Card.Body>
                            <Card.Title>SafeCyberLearn’s training platform is cloud-based and easy to implement</Card.Title>
                            <Card.Text>
                            SafeCyberLearn is an end-to-end training platform - so there’s no need for additional resources to deploy and manage your entire security awareness program. Our POC allows you to evaluate the full implementation process with no risk. Onboarding the program takes about one-hour, and operating and monitoring your training progress is estimated at one hour per quarter. SafeCyberLearn’s award-winning SaaS platform offers Azure AD and Google Workspace integrations, holds ISO 27001 security certification, and supports Single Sign On (SAML2).
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BankingIndustry