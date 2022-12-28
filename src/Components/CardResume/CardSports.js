import './CardResume.css'
import { Card } from "react-bootstrap";

export default function CardSports(props) {
const {text, subtitle, sports} =props
  return (
    <div>
    <Card className="text-center p-2 card-resume"  >
      <Card.Body>
        <Card.Subtitle>
          <b >{subtitle}</b>
        </Card.Subtitle>
        <ul>
          {sports.map((sport, index) => (
            <li key={index}>{sport.label}</li>
          ))}
        </ul>
      </Card.Body>
    </Card>
    {text && (
        <Card className="text-center p-2 card-resume">
          <Card.Body>
            <Card.Subtitle>
              <b >Your addittional hobbie is:</b>
            </Card.Subtitle>
            <Card.Text>{text}</Card.Text>
          </Card.Body>
        </Card>
      )}
    
  </div>
  )
}
