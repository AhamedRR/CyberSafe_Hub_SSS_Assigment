import React from 'react'
import { Card } from 'react-bootstrap'
import img from "../../img/locations3.png"

const PharmaceuticalIndustry = () => {
  return (
    <div className='BankingIndustry'>
    <div className='BankingIndustry-hero'>
        <div className='BankingIndustry-hero-left w-50'>
            <h3 className='title'>Pharmaceutical Employees Are a Constant Target</h3>
            <h3 className='sub-title'>Onboard a Cybersecurity Awareness Training Program that prepares your employees ready for anything</h3>
            <span>
            Pharmaceuticals has always been a targeted industry due to it’s highly valued intellectual property and the high costs of drug development. Ever since COVID-19, this industry has moved to the forefront of the cyber warfare landscape.
            </span>
        </div>
        <div className='BankingIndustry-hero-right w-50'>
            <img src="https://cybeready.com/wp-content/uploads/Asset-1.png" alt="PharmaceuticalIndustry" />
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
                “We were faced with the challenge of training over 40,000 employees in 65 locations and in 30 different languages. SafeCyberLearn’s training platform customizes and localizes the content on the fly, and the training continuously adapts to where employees are at in the learning curve, which has proven to generate a significant change in employee behavior towards phishing attacks globally''</span>
                <span className='title-name'>
                Ilan Abadi
                </span>
                <span>
                VP, Global CISO at Teva Pharmaceuticals
                </span>
                <br></br>
                <img src="https://cybeready.com/wp-content/uploads/1200px-TevaPharm.svg-1.png" alt="rbs" width={150} height={50} />
            </div>
        </div>
        <div className='attacks-container'>
            <img src={img} alt=""/>
        </div>
        <div className='vulnerabilities'>
            <h3 className='text-center'>Pharma has unique training needs and vulnerabilities</h3>
            <span>
            Pharma is a traditional industry with its own cyber risks. The value of sensitive IP cannot be underestimated, and interrupting processes or stealing data can impact human lives. Your employees range from sales and marketing, to researchers and scientists, and many of these employees do not come from a technical background at all.
            </span>
            <div className='vulnerabilities-header'>
                <h2 >Pharmaceutical Industry unique challenges</h2>
                <h2 >SafeCyberLearn has the solution</h2>
            </div>
            <div className='vulnerabilities-contents d-flex flex-column'>
                <div className='d-flex flex-row gap-3'>
                    <Card  className='w-50'>
                        <Card.Body>
                            <Card.Title>Pharmaceutical employees need flexible training</Card.Title>
                            <Card.Text>
                            Your workforce composition is probably diverse - from line workers to highly skilled academics, and from employees working in shifts around the clock to research departments based at your headquarters. Most Pharmaceutical companies are spread in multiple locations and many times this is in disparate locations across the globe, making it difficult to develop and roll out a coherent security awareness program. As things are it is almost impossible to get everyone in the same physical place, or even train in the same language. Different divisions will typically have unique traits and characteristics, which require different styles and variations of training. Creating multiple training programs becomes both costly and time consuming for your security team.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card  className='w-50' >
                        <Card.Body>
                            <Card.Title>SafeCyberLearn’s solution is fully automated</Card.Title>
                            <Card.Text>
                            The platform distributes training campaigns daily based on real-time data, so 100% of your Pharmaceutical workforce gets trained every single month, no matter where they’re based, or what role they play. SafeCyberLearn’s training content is automatically customized and localized, according to both geography and language, and evolves as users interact with the training content, based on their levels of engagement and performance.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div  className='d-flex flex-row gap-3' >
                    <Card className='w-50' >
                        <Card.Body>
                            <Card.Title>Cloud transformation has created a whole new world</Card.Title>
                            <Card.Text>
                            Pharmaceutical employees fill a plethora of roles - from researchers to line workers, and sales teams - and many of them have been working mostly in disconnected environments, before cloud transformation or working from home began. The challenge is delivering training content that can help migrate security culture fast enough to help your employees take an active stance in protecting your company.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='w-50' >
                        <Card.Body>
                            <Card.Title>SafeCyberLearn’s solution offers a personalized learning experience</Card.Title>
                            <Card.Text>
                            Training sessions autonomously adapt per employees’ individual learning pace so that high-risk employees receive high-frequency training, and your behavior can change to protect sensitive IP where it’s most at risk. Continuous learning, repetition, and a range of experiences and scenarios challenge employees to get comfortable with the new cyber landscape.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div  className='d-flex flex-row gap-3 pb-3' >
                    <Card className='w-50'>
                        <Card.Body>
                            <Card.Title>A critical industry with a measurable impact on health and safety</Card.Title>
                            <Card.Text>
                            Pharmaceutical companies are under continuous threat, and while conforming to regulations such as HIPAA has traditionally worked within isolated networks, compliance is not the same as security. Today, cloud and IOT have erupted, often working alongside legacy technologies, and employees need to be prepared to be responsible for connected systems that hold mission-critical information and IP. Additionally, due to high investments in equipment and inventory costs and the long-term investments in research, hackers are seeing the value of targeting Pharma, and so this industry is under a growing threat. Due to issues of business continuity, any new technology implementation process needs to be highly secure and avoid complexity.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='w-50' >
                        <Card.Body>
                            <Card.Title>SafeCyberLearn’s training platform is cloud-based and has zero impact on operations</Card.Title>
                            <Card.Text>
                            SafeCyberLearn is an end-to-end training platform - so there’s no need for additional hardware or software to deploy and manage your entire security awareness program. Our POC allows you to evaluate the full implementation process with no risk. Onboarding the program takes about one-hour, and operating and monitoring your training progress is estimated at one hour per quarter. SafeCyberLearn’s award-winning SaaS platform offers Azure AD and Google Workspace integrations, holds ISO 27001 security certification, and supports Single Sign On (SAML2).
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
</div>
  )
}

export default PharmaceuticalIndustry