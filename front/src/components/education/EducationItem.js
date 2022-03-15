import React, {useState} from 'react';
import { Form, Button, Col, Row} from 'react-bootstrap';

const EducationItem = ({onCreate}) => {

  const [school, setSchool] = useState("");
   
  const handleSubmit = (e) => {
     e.preventDefault();
     console.log(school);   
  };   
     
  return (
     <Form onSubmit={handleSubmit}>
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Control 
            type="text"
            onChange={(e) => setSchool(e.target.value)}
            name="shcool"
            value={school}
            placeholder="학교이름" />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Control 
            type="text"
            name="major"
            placeholder="전공" />
        </Form.Group>

        <div className="mb-3 mt-3">
             <Form.Check label="재학중" inline></Form.Check>
             <Form.Check label="학사졸업" inline></Form.Check>
             <Form.Check label="석사졸업" inline></Form.Check>
             <Form.Check label="박사졸업" inline></Form.Check>
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

export default EducationItem;