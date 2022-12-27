import { Container, Row } from "react-bootstrap";
import CardFruit from './CardFruit'
import { useState } from "react";


export const fruits = [
  {
    id: 1,
    icon: "🍅",
    name: "Tomato",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 2,
    icon: "🍍",
    name: "Pineapple",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 3,
    icon: "🍌",
    name: "Banana",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
];


export default function FirstStep() {
  const [selectedCard, setSelectedCard] = useState(null)
  const clickFruit = (fruit) =>{
    setSelectedCard(fruit.id)
    localStorage.setItem('fruitName', fruit.name)
    localStorage.setItem('fruitIcon', fruit.icon)
  }
  return (
    <Container>
      <Row>
        <h1>Chose your favourite fruit</h1>
        <h4>Click on the fruit that you preffer and then click the button of "Next step"</h4>
      </Row>
      <Container className="p-5 text-center">
      <Row>
        
      {fruits.map((fruit, index) => (
        
            <CardFruit
              fruit={fruit}
              key={index}
              clickFruit ={clickFruit}
              selectedCard ={selectedCard}
              
            />
           
          ))}
      </Row>
      </Container>  
    </Container>
  )
}
