import React, {useState} from 'react';
import { Form, Button, Col, Row} from 'react-bootstrap';

const EducationForm = ({onCreate}) => {

  const [school, setSchool] = useState("");
  const [major, setMajor] = useState("");
  const [position, setPosition] = useState("");
   
  const handleSubmit = (e) => {
     e.preventDefault();

     onCreate(school, major, position);
  };   
     
  return (
     <Form onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Control 
            type="text"
            onChange={(e) => setSchool(e.target.value)}
            name="shcool"
            value={school}
            placeholder="학교이름"/>
        </Form.Group>

        <Form.Group >
            <Form.Control 
            type="text"
            name="major"
            value={major} 
            onChange={(e) => setMajor(e.target.value)}
            placeholder="전공" />
        </Form.Group>

        <div className="mb-3 mt-3">
             <Form.Check 
             inline 
             label="재학중"
              name="재학중" 
             value={position}
             onChange = {(e) => { e.target.checked ? setPosition("재학중") : setPosition("")}}
             ></Form.Check>
             <Form.Check 
             inline 
              label="학사졸업"
              name="학사졸업"  
              onChange = {(e) => { e.target.checked ? setPosition("학사졸업") : setPosition("")}}
              ></Form.Check>
             <Form.Check
              inline 
             label="석사졸업" 
             name="석사졸업"
             onChange = {(e) => { e.target.checked ? setPosition("석사졸업") : setPosition("")}}
             ></Form.Check>
             <Form.Check 
             inline 
             label="박사졸업" 
             name="박사졸업" 
             onChange = {(e) => { e.target.checked ? setPosition("박사졸업") : setPosition("")}} 
             ></Form.Check>
        </div>

        <Form.Group as={Row} className="mt-3 text-center">
        <Col sm={{ span: 20 }}>
        <Button 
        variant="primary" 
        type="submit" 
        className="me-3">
         확인
        </Button>
        <Button variant="secondary" >
         취소
        </Button>
        </Col>
      </Form.Group>
      </Form>

  )}

export default EducationForm;