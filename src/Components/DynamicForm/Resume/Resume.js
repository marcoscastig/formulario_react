import {Button, CardGroup, Modal} from "react-bootstrap";
import CardResume from "../../CardResume/CardResume";
import CardSports from "../../CardResume/CardSports";



export default function Resume({showModal,setStep,setModal}) {

    const favouriteFruit = localStorage.getItem('fruitName')
    const fruitIcon = localStorage.getItem('fruitIcon')
    const selectedSport = JSON.parse(localStorage.getItem('selectedSport'))
    const additionalSport = localStorage.getItem('additionalSport')
    const comment = localStorage.getItem('comment')
    
    const closeFunction = ()=> {
        localStorage.clear()
        setModal(false)
        setStep(1)

    }

    
    


  return (
    
    <Modal 
        show={showModal} size="lg" 
        aria-labelledby="contained-moadl-title-vcenter"
        centered
        onHide={closeFunction}
        > 
        <Modal.Header closeButton>
           <Modal.Title>
           Congratulations!
            </Modal.Title> 
        </Modal.Header>
        <Modal.Body>
            <h3>This is your resume</h3>
            <CardGroup className="mt-3">
                {favouriteFruit && fruitIcon && (
                    <CardResume title={fruitIcon} 
                    subtitle = {"Your Favourite fruit is: "}
                    text={favouriteFruit} 
                    />
                ) }
                { selectedSport &&(
                <CardSports
                subtitle = {"Your favourite sports"}
                text ={additionalSport}
                sports = {selectedSport}
                />
                )}
                
                {comment &&(
                    <CardResume
                    subtitle="And for the last this is the comment"
                    text={comment}
                    />

                )}

            </CardGroup>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={closeFunction} variant='outline-dark'> Exit and eliminate data</Button>
        </Modal.Footer>
        </Modal>
  )
}
