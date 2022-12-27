import { Col, Card } from "react-bootstrap"
import './FirstStep.css'

export default function CardFruit({fruit, clickFruit, selectedCard}) {
    const { id, icon, name, description } = fruit
  return (
    
        <Col className={`card-fruit ${selectedCard === fruit.id ? 'selected-card': ""}  `}
         key={id}  onClick={()=>clickFruit(fruit)}>
        <Card>
        <Card.Body>
          <Card.Title>{icon}</Card.Title>
          <Card.Subtitle>{name}</Card.Subtitle>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
        </Col>
        
  )
}
