import { useState} from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Select from "react-select";


const options = [
  { id: 1, value: "football", label: "Football ⚽" },
  { id: 2, value: "computer", label: "Computer 💻" },
  { id: 3, value: "play", label: "Play 🎮" },
  { id: 4, value: "chess", label: "Chess ♟" },
  { id: 5, value: "photo", label: "Photography 📷" },
  { id: 6, value: "swim", label: "Swim 🥽" },
  { id: 7, value: "run", label: "Run 👟" },
  { id: 8, value: "music", label: "Pplaymusic 🎼" }
];

export default function SecondStep() {
  const [selectOption, setSelectOption] = useState(null)

  const selectedSport = JSON.stringify(selectOption)
  localStorage.setItem('selectedSport', selectedSport)

  const onChangeAdditionalSport = e=>{
    const sport = e.target.value;
    localStorage.setItem('additionalSport', sport)

  }


  return (
    <div>
      <h2>Select your favourite sport</h2>
      <h4>Tell me about your hobbies</h4>
      <Container className="text-center ">
        <Row  className="justify-content-md-center mb-2">
          <Col lg="7">
          <Select
              defaultValue={selectOption}
              onChange={setSelectOption}
              options={options}
              isSearchable
              isMulti
            />
          </Col>
          <Col lg="7" className="mt-4">
            <h5>Do you want to add more?</h5>
          <Form.Control type="text" placeholder="Write what you want to add" onChange={onChangeAdditionalSport}/>
          </Col>
        </Row>

      </Container>
    </div>
  )
}
