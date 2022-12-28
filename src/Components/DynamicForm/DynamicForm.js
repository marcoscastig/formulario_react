import { Container,Row } from "react-bootstrap"
import { useState } from "react"
import  "./DynamicForm.css"
import FirstStep from "../FirstStep/FirstStep"
import SecondStep from "./SecondStep"
import ThirdStep from "./ThirdStep/ThirdStep"

export default function DynamicForm() {
    const [step, setStep] = useState(1)

    const showNextStep = ()=>{
        setStep(step+1)
        
    }
    const showPreviousStep = ()=>{
        setStep(step-1)
      

    }
    
  return (
    <div className="dynamic-form mt-3 mb-4" id="dynamicForm" >
    <Container className="text-center" id="dynamicFormContainer" >
        <div className="content-dynamic-form">
            <Row>
        <h1 className="tittle-dynamic-form"> Fill the form</h1>
        <p className="steps-numbers">Step {step}  of 3</p>
            {getPageByStep(step, setStep)}

            <Row xs={12} md={2}>
                
        <div className="actions">
            <div className="container-text">
        {step > 1 && step < 4 && (
                <p className="before" onClick={showPreviousStep}>🔙 Previous step </p>
            )}
            </div>
        </div>
        <div className="actions">
            <div className="container-text">
        {step > 0 && step < 3 && (         
                <p className="next" onClick={showNextStep}>Next step 🔜</p>
                )}
            </div>
        </div>
        </Row>
        </Row>
        </div>
    </Container>
    </div>
  )
};

function getPageByStep (step,setStep){
    if(step===1){
        return <FirstStep/>
    }
    else if(step===2){
        return <SecondStep/>
    }
    else if(step===3){
       return <ThirdStep setStep={setStep}/>
    }
}
