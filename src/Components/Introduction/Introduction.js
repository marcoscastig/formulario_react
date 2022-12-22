import { Button, Col, Container, Row } from 'react-bootstrap'
import './Introduction.css'
export default function Introduction() {
  return (
    <div className="intro p-3 p-lg-5 mt-5" >
        <Container fluid>
        <Row className='justify-content-md-center'>
            <Col xs={12} md={8}>
            <h1 className='pl-2 text-center'>
            ¡Welcome to a dynamic form! <br></br><span className='textIntro'> In this form you can interact with things and do actions, try it ;)</span>
            </h1>
            <h4 className='text-center pt-3'>
                My name is Marcos Castiglioni, I made this form and many other proyects. 
                You can go to my GitHub page and see them.
            </h4>
              <Row className='justify-content-center'>
            <Col >
              <Button variant="success" className='botonPrincipal  p-3 m-2' onClick={()=>console.log("click")} ><i>Get in touch</i> </Button>
            </Col>
            <Col className='text-end'>
              <a className='enlace' href='dynamic-form'><b>Start to create</b> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevrons-right" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00b341" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="7 7 12 12 7 17" />
  <polyline points="13 7 18 12 13 17" />
</svg></a>
            </Col>

            </Row>

            </Col>
        </Row>
        </Container>
    </div>
  )
}
