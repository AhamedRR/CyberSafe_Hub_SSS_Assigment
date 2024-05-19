import React from 'react'
import { Modal,Button } from 'react-bootstrap'
const AnswerModel = (props) => {

const handleClose = () =>{
    props.handleClose();
}
  return (
    <Modal show={props.show} onHide={handleClose} size="lg" centered>
    <Modal.Header closeButton>
      <Modal.Title>Answers</Modal.Title>
    </Modal.Header>
    <Modal.Body style={{maxHeight:"450px",overflowY:"auto"}}>
            {
                props.data.questions.map((d,i)=>{
                    return(
                        <>
                              <h4>{`${d.question}`}</h4>
                              <h6 className='text-success'>{`${d.answer}`}</h6>
                        </>
                  
                    )
                })
            }
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
  )
}

export default AnswerModel