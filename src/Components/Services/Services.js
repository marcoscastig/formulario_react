import { Container, Row, Col } from 'react-bootstrap'
import './Services.css'
import imgCourse1 from "../../Assets/img/hbo.jpeg";
import imgCourse2 from "../../Assets/img/netflix.jpeg";
import imgCourse3 from "../../Assets/img/prime.jpeg";
import CardService from './CardService/CardService';

export default function Services() {
    const localArray = [{
        title: "Ullamco laboris ",
        subtitle: "Lorem perspiciati sit amet",
        image: imgCourse1,
        footer: "Sed ut perspiciatis ➡️",
        link: "#!",
      },
      {
        title: "Prestashop Ddjhk",
        subtitle: "Lorem restashop dolor sit amet",
        image: imgCourse2,
        footer: "Consequuntur magni ➡️",
        link: "#!",
      },
      {
        title: "Vel illum qui dolorem",
        subtitle: "Lorem ipsum illum qui amet",
        image: imgCourse3,
        footer: "Quis nostrum ➡️",
        link: "#!",
      },
    ];
  return (
    <div className='p-4 mt-5'>
        <Container fluid >
            <Row className='justify-content-md-center'>
                <Col xs={12} md={8} >
                <h2 className='text-center tittle'>Services</h2>
                <h4 className='text-center pb-3'>Lorem ipsum dolor sit amet, tempor incididunt ut labore et dolore magna aliqua. </h4>
                <Row xs={12} md={3} className='justify-content-center mt-4 text-center pb-3'>
                  {localArray.map((service, index)=>
                  <CardService service={service} key={index}/>
                  
                  )}
                </Row>
                </Col>


            </Row>
        </Container>
    </div>
  )
}
