import React, {useState} from 'react';
import { Form, Button, Col, Row} from 'react-bootstrap';
import * as Api from "../../api";

const EducationAddForm = ({
  portfolioOwnerId, 
  setOpen,
  setEducations
}) => {

  const [school, setSchool] = useState("");
  const [major, setMajor] = useState("");
  const [position, setPosition] = useState("");

  const positionArray = ["재학 중", "학사 졸업", "석사 졸업", "박사 졸업"];

  const handleChange = (e) => {
    const value = e.target.value;
    setPosition(value);
  };
  const handleSubmit = async(e) => {
     e.preventDefault();

     const userId = portfolioOwnerId;

     //사용자가 입력한 데이터, post 요청! 
     try{
       await Api.post("education/create", {
        userId,
        school,
        major,
        position,
      });

      const res = await Api.get(`educationlist/${userId}`);
      setEducations(res.data);
      setOpen(false);
     }
     catch(error){
       console.log(error);
       if (error.response) {
        const { data } = error.response;
        console.error("data : ", data);
      }
     }
  };

  return (
     <Form onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Control
            style={{marginBottom: "20px"}} 
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

        <div key={`inline-radio`} className="mb-3 mt-3">
        <Form.Group key=" inline-radio" className="mb-3 m-2">
        {positionArray.map((position, idx) => (
          <Form.Check
            inline
            key={`inline-radio-${idx}`}
            label={position}
            name="position"
            type="radio"
            defaultValue={position}
            onChange={handleChange}
          />
        ))}
      </Form.Group>
      </div>

        <Form.Group as={Row} className="mt-3 text-center">
        <Col sm={{ span: 20 }}>
        <Button
         mb="10"
         style={{
          border:"none",
          backgroundColor:"#339AF0"
        }} 
        variant="primary" 
        type="submit" 
        className="me-3">
         확인
        </Button>
        <Button
         mb="10"
         style={{
          border:"none",
          backgroundColor:"#C4C4C4"
        }} 
        variant="secondary" 
        onClick={() => setOpen((prev) => !prev)}
        >
         취소
        </Button>
        </Col>
      </Form.Group>
      </Form>

  )}


export default EducationAddForm;
