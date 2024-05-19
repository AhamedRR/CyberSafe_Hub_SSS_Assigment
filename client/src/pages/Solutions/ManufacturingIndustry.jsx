import React from 'react'
import { Card } from 'react-bootstrap'
import img from "../../img/locations2.png"
const ManufacturingIndustry = () => {
  return (
<div className='BankingIndustry'>
        <div className='BankingIndustry-hero'>
            <div className='BankingIndustry-hero-left w-50'>
                <h3 className='title'>Manufacturing Companies Have Complex Security Challenges</h3>
                <h3 className='sub-title'>Onboard a Cybersecurity Awareness Program that makes Training Easy and Effective</h3>
                <span>
                Almost 50% of companies in the manufacturing industry have recently reported a cyber breach. With phishing on the rise, SafeCyberLearn’s training solution protects your employees from day one.
                </span>
            </div>
            <div className='BankingIndustry-hero-right w-50'>
                <img src="https://cybeready.com/wp-content/uploads/Group-36@1x.png" alt="ManufacturingIndustry" />
            </div>
        </div>
        <div className='BankingIndustry-hero-contents'>
            <h3 className='title'>Our Learning Platform Sets You Up for Success</h3>
            <div className='BankingIndustry-hero-content'>
                <div className='BankingIndustry-hero-sub-content'>
                    <div className='image'>
                        <img src="https://cybeready.com/wp-content/uploads/work-chart.svg" alt="" />
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
                        <img src="https://cybeready.com/wp-content/uploads/work-head.svg" alt="" />
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
                        <img src="https://cybeready.com/wp-content/uploads/work-messenger.svg" alt="" />
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
                <img src="https://cybeready.com/wp-content/uploads/quotation-img01@2x.jpg" height={500} width={700} alt="" />
            </div>
            <div className='text-content'>
                <span>
                “With a lean security team in place and employees in both corporate and industrial roles, we needed to find a way to engage all employees in the training program without taxing our team. SafeCyberLearn’s autonomous training platform runs by itself and trains 100% of the employees year-round with optimal results”.</span>
                <span className='title-name'>
                 Daniel Cep
                </span>
                <span>
                 IT Security at ŠKODA AUTO
                </span>
                <img src="https://cybeready.com/wp-content/uploads/Skoda_logo-2.png" alt="rbs" width={120} height={100} />
            </div>
        </div>
        <div className='attacks-container'>
            <img src={img} alt=""/>
        </div>
        <div className='vulnerabilities'>
            <h3 className='text-center'>Manufacturing has unique training needs and vulnerabilities</h3>
            <span>
            The relationship between OT and IT was traditionally siloed, and manufacturing facilities didn’t need to worry about the threat of cybercrime. Today, this is no longer the case. Industry 4.0, and the rise of digital transformation means that your employees may need to upskill in terms of security awareness. Your employee training platform needs to be engaging, even for employees that are less technically-savvy, organic, working alongside their usual routine, and built to support a change in behavior for employees from HQ to the factory floor.
            </span>
            <div className='vulnerabilities-header'>
                <h2 >Manufacturing Industry unique challenges </h2>
                <h2 >SafeCyberLearn has the solution</h2>
            </div>
            <div className='vulnerabilities-contents d-flex flex-column'>
                <div className='d-flex flex-row gap-3'>
                    <Card  className='w-50'>
                        <Card.Body>
                            <Card.Title>Manufacturing employees need flexible training</Card.Title>
                            <Card.Text>
                            Your workforce composition is diverse - from line workers to highly skilled engineers, and from employees working in shifts around the clock to back-office administrators working in your headquarters. Additionally, most manufacturing companies are spread over multiple locations, making it difficult to develop and roll out a coherent security awareness program, let alone get everyone in the same physical space. Different plants typically have unique traits and characteristics, which require different styles and variations of training. Creating multiple training programs is both costly and time consuming for your security team.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card  className='w-50' >
                        <Card.Body>
                            <Card.Title>SafeCyberLearn’s solution is fully automated</Card.Title>
                            <Card.Text>
                            The platform distributes training campaigns daily based on real-time data, so 100% of your workforce gets trained every single month, no matter where they’re based or what role they have in your manufacturing organization. SafeCyberLearn’s training content is automatically customized and localized per location and language, and evolves as users interact with the training content, based on their levels of engagement and performance.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div  className='d-flex flex-row gap-3' >
                    <Card className='w-50' >
                        <Card.Body>
                            <Card.Title>Cultural change is often hardest of all</Card.Title>
                            <Card.Text>
                            Manufacturing employees fill a plethora of roles - from IT to line workers, engineers, and sales teams - and many of them have been working within the industry for years, since before Industry 4.0 and cyber threats became this generation’s buzzwords. The challenge is delivering training content that is suitable to different types of individuals, including those who have likely built up poor cybersecurity practices over the long time they have worked in the industry.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='w-50' >
                        <Card.Body>
                            <Card.Title>SafeCyberLearn’s solution offers a personalized learning experience</Card.Title>
                            <Card.Text>
                            Training sessions autonomously adapt to employees’ individual learning pace so that high-risk employees receive high-frequency training. Just like in a manufacturing line, continuous learning and repetition lead to improved productivity and performance, and a range of experiences and scenarios challenge employees’ abilities over and over again. The result? New habits, and well-trained staff who naturally make smarter choices.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div  className='d-flex flex-row gap-3 pb-3' >
                    <Card className='w-50'>
                        <Card.Body>
                            <Card.Title>Complex legacy infrastructures, plus the high cost of a breach</Card.Title>
                            <Card.Text>
                            Legacy technologies are a mainstay in the manufacturing sector - and often make implementing a new technology painful. You’ll often find an attachment to outdated approaches that are no longer effective. Additionally, due to high investments in manufacturing equipment and inventory costs, and the critical nature of manufacturing processes, this industry is under high strain for cyber crime. High uptime requirements and mission-critical operations means that any new technology implementation needs to be highly secure and avoid complexity.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='w-50' >
                        <Card.Body>
                            <Card.Title>SafeCyberLearn’s training platform is cloud-based and easy to implement</Card.Title>
                            <Card.Text>
                            SafeCyberLearn is an end-to-end training platform - with no need for integration that may adversely affect your manufacturing processes. Our POC allows you to evaluate the full implementation with zero risk. Onboarding the program takes about one-hour, and operating and monitoring your training progress is estimated at one hour per quarter. SafeCyberLearn’s award-winning SaaS platform offers Azure AD and Google Workspace integrations, holds ISO 27001 security certification, and supports Single Sign On (SAML2).
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ManufacturingIndustry