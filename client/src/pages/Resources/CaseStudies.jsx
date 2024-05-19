import React from 'react'
import "./resources.css"
import { Button, Card } from 'react-bootstrap'


const CaseStudies = () => {

   const onchange =(link) =>{
    window.open(link, '_blank');
   }

  return (
    <div className='CaseStudies'>
        <h1 className='text-center'>CaseStudies</h1>
        <div className='books'>
            <Card style={{ width: '22rem' }}>
                <Card.Img variant="top" src="https://cybeready.com/wp-content/uploads/shutterstock_1390841282-scaled.jpg" height={150} />
                <Card.Body className='d-flex flex-column gap-5'>
                    <Card.Title>Natwest - Royal Bank of Scotland Banking Industry</Card.Title>
                    <Button variant="success" size='lg' onClick={()=>{onchange("https://en.wikipedia.org/wiki/NatWest_Group#:~:text=NatWest%20Group%20plc%20is%20a,banking%2C%20insurance%20and%20corporate%20finance.")}} >Read More</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '22rem' }}>
                <Card.Img variant="top" src="https://cybeready.com/wp-content/uploads/shutterstock_146887154-scaled.jpg" height={150} />
                <Card.Body className='d-flex flex-column gap-5'>
                    <Card.Title>SodaStream - Customer Success Story Food & Beverage Industry</Card.Title>
                    <Button variant="success" size='lg' onClick={()=>{onchange('https://en.wikipedia.org/wiki/SodaStream')}}>Read More</Button>
                </Card.Body>
            </Card>

            
            <Card style={{ width: '22rem' }}>
                <Card.Img variant="top" src="https://cybeready.com/wp-content/uploads/white-paper3.jpg" height={150} />
                <Card.Body className='d-flex flex-column gap-5'>
                    <Card.Title>Payoneer <br /> Financial Industry</Card.Title>
                    <Button variant="success" size='lg' onClick={()=>{onchange('https://en.wikipedia.org/wiki/Payoneer')}}>Read More</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '22rem' }}>
                <Card.Img variant="top" src="https://cybeready.com/wp-content/uploads/case-study1.jpg" height={150} />
                <Card.Body className='d-flex flex-column gap-5'>
                    <Card.Title>Clalit Medical Services The second largest HMO in the world</Card.Title>
                    <Button variant="success" size='lg' onClick={()=>{onchange('https://en.wikipedia.org/wiki/Clalit_Health_Services')}}>Read More</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '22rem' }}>
                <Card.Img variant="top" src="https://cybeready.com/wp-content/uploads/case-study2.jpg" height={150} />
                <Card.Body className='d-flex flex-column gap-5'>
                    <Card.Title>Ayalon <br></br> Insurance Industry</Card.Title>
                    <Button variant="success" size='lg' onClick={()=>{onchange('https://en.wikipedia.org/wiki/Shlomo_Grofman')}}>Read More</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '22rem' }}>
                <Card.Img variant="top" src="https://cybeready.com/wp-content/uploads/case-study3.jpg" height={150} />
                <Card.Body className='d-flex flex-column gap-5'>
                    <Card.Title> Healthcare Industry A phisher's paradise</Card.Title>
                    <Button variant="success" size='lg' onClick={()=>onchange('https://en.wikipedia.org/wiki/Healthcare_industry')}>Read More</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '22rem' }}>
                <Card.Img variant="top" src="https://cybeready.com/wp-content/uploads/pixabay-150px.png" height={150} />
                <Card.Body className='d-flex flex-column gap-5'>
                    <Card.Title> IDC <br />Academic Industry</Card.Title>
                    <Button variant="success" size='lg' onClick={()=>onchange('https://en.wikipedia.org/wiki/IDC')}>Read More</Button>
                </Card.Body>
            </Card>
    
        </div>
    </div>
  )
}

export default CaseStudies