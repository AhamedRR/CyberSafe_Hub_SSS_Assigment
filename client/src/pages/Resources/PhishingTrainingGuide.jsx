import React from 'react'
import "./resources.css"

const PhishingTrainingGuide = () => {
  return (
    <div className='PhishingTrainingGuide'>
        <div className='hero'>
        </div>
        <div className='PhishingTrainingGuide-content p-5'>
            <div className='d-flex flex-column gap-3'>
                <span>Phishing is the most common type of cybercrime today. According to the FBI, attacks have nearly doubled in frequency from 2019 to 241,324 incidents in 2020 and continue to spread like wildfire. </span>
                <span>Since the Nigerian Prince scam in the 1980s, phishing attacks have come a long way and become much more sophisticated. Modern phishing attacks are targeted and use advanced techniques and pretexts to maximize their probability of success. They go so far as to mask themselves behind top brand names, their logos, and other identifying aspects, to trick individuals into engaging with malicious links and attachments. </span>
            </div>
            <div>
                <img src="https://cybeready.com/wp-content/uploads/shutterstock_1089808376-595xh.jpg" alt="" />
            </div>
        </div>
        <div className='PhishingTrainingGuide-content-sub p-5'>
          <span>
          <b> No industry, organization, or individual is immune to phishing threats,</b> but they can take measures to prevent an attack. <b> That prevention starts with effective phishing protection</b> as part of your overall cyber security awareness program. 
          </span>
          <span>
          This guide is for security and cyber security executives and professionals who need data-driven, behavior-changing phishing protection for their employees. By reading this guide, you’ll learn everything you need to know about phishing protection, including:
          </span>
          <ul>
            <li>A quick <b> overview of phishing and phishing protection</b></li>
            <li><b>Why your employees need phishing protection</b></li>
            <li>The most <b>common types of phishing attacks</b> to watch for</li>
            <li><b>Phishing-related terms</b> to keep in mind</li>
            <li><b>Why phishing simulations fail</b></li>
            <li><b>How to stop phishing attacks</b> in their tracks</li>
            <li>Tips to <b> boost the effectiveness of your phishing protection</b> program</li>
            <li><b>Must-have phishing resources</b></li>
            <li><b>How to kick-start your phishing protection plan</b></li>
          </ul>
          <span>
          Read on to learn how to <b> safeguard your organization from a phishing attack by providing effective phishing protection for your employees. </b>
          </span>
          <span className='title'>What is phishing </span>
          <span>
          Phishing is a cybersecurity offense that disguises email, telephone, or text messages as coming from a popular brand, such as PayPal or Netflix. It uses trickery to deceive individuals into clicking a link to a well-crafted counterfeit website or domain. At the site, victims leave their personal information or credit card numbers, which attackers then use to compromise devices and steal information. 
          </span>
          <span>
          These messages often use:
          </span>
          <ul>
            <li><b> Attention-grabbing subject lines:</b> The subject lines in phishing campaigns are catchy and have compelling calls to action to create a sense of fear of missing out (FOMO).</li>
            <li><b> Authentic-looking hyperlinks:</b> Hackers use operating system tools to disguise devious links and make them look harmless.</li>
            <li><b> Too-good-to-be-true content:</b> Hackers create phishing campaigns based on free giveaways or unrealistic discounts, especially before holidays or major events.</li>
          </ul>
          <span>
            All phishing scams tend to follow the same flow:
          </span>
          <ol>
            <li>A hacker sends a <font color='green'><b> malicious message</b></font>  to an unsuspecting user.</li>
            <li>The potential victim opens the message and clicks the hyperlink.</li>
            <li>The victim is diverted to a phishing website, where they enter their personal or professional data.</li>
            <li>The hacker steals the data and then sells it on the dark web or uses it for other malicious purposes.</li>
          </ol>
          <span>
          To prevent these types of attacks, organizations need phishing protection.
          </span>
          <span className='title'>What is phishing protection</span>
          <span>
           <b> Phishing protection is part of an organization’s overall cyber security strategy to prevent cyber attackers from gaining access to and stealing data and sensitive information.</b>
           Phishing protection consists of the following components.
          </span>
          <span className='title'>Awareness training </span>
          <span>
          <font color="green"> Awareness training </font> teaches employees about the different types of phishing, how they work, what to look for or <font color="green">  listen for </font>, and how to react if they suspect an attack. 
          For example, employees learn how to identify malicious URLs and handle an email that contains a suspicious attachment. 
          </span>
          <span className='title'>
            Phishing simulations
          </span>
          <span>
          <font color="green"> Phishing simulations </font> <b> teach employees how to deal with phishing attacks through real-world,</b> hands-on practice. To be effective, <font color="green"> the simulations </font> must occur regularly with greater frequency and  <font color="green">focus on the threats </font> employees are most likely to face based on their job role, department, or location. 
          </span>
          <span className='title'>Anti-phishing software</span>
          <span>
           <font color="green"> Anti-phishing software </font> <b> inspects the content of emails, websites, and other ways to access data through the internet and then warns a user of a threat.</b> It also prevents phishing emails from reaching an employee’s inbox.
          </span>
          <span className='title'>
            Why phishing protection is important
          </span>
          <span>
          Phishing protection is critical for several reasons: frequency of attacks, the cost of an attack, and a lack of phishing awareness by employees.
          </span>
        </div>
    </div>
  )
}

export default PhishingTrainingGuide