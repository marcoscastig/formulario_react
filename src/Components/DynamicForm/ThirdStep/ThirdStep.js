import { useState } from "react";
import { Col, Container, FloatingLabel, Form, Row, Modal } from "react-bootstrap";
import Resume from "../Resume/Resume";
import './ThirdStep.css'



export default function ThirdStep({setStep}) {
  const [modal, setModal] = useState(false)

  const onChangeComment = e=>{
    const comment = e.target.value
    localStorage.setItem('comment', comment)
  }

  return (
    <div>
      <h2>Third step</h2>
      <h4>Do you want to add any comment?</h4>
      <Container className="p-4 text-center">
        <Row className="justify-content-md-center">
          <Col lg="10">
            <FloatingLabel controlId="floatingTextArea" label="Comments" className="mb-3">
            <Form.Control
                as="textarea"
                placeholder="Leave a comment"
                onChange={onChangeComment}
              />

            </FloatingLabel>
          
          </Col>
        </Row>
        <div className="send-form">
          <p className="result p-3" onClick={()=>setModal(true)}>
            View result 🏆
          </p>
        </div>
      </Container>
      {modal && (
        <Resume showModal={modal} setModal={setModal} setStep={setStep}/>
      )}
    </div>
  )
}

