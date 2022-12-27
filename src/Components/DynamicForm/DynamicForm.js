import { Col, Container,Row } from "react-bootstrap"
import { useState } from "react"
import  "./DynamicForm.css"

export default function DynamicForm() {
    const [step, setStep] = useState(1)

    const showNextStep = ()=>{
        setStep(step+1)
        
    }
    const showPreviousStep = ()=>{
        setStep(step-1)
      

    }
    console.log(step)
  return (
    <div className="dynamic-form mt-3 mb-4" id="dynamicForm" >
    <Container className="text-center" id="dynamicFormContainer" >
        <div className="content-dynamic-form">
            <Row>
        <h1 className="tittle-dynamic-form"> Fill the form</h1>
        <p className="steps-numbers">Step {step}  of 3</p>
            <Row xs={12} md={2}>
                
        <div className="actions">
            <div className="container-text">
                <p className="before" onClick={showPreviousStep}>Previous step</p>
            </div>
        </div>
        <div className="actions">
            <div className="container-text">
                <p className="next" onClick={showNextStep}>Next step</p>
            </div>
        </div>
        </Row>
        </Row>
        </div>
    </Container>
    </div>
  )
}
