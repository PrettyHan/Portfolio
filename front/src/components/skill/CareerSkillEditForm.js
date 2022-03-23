import React, {useState} from 'react';
import { Form, Button, Col, Row, Card} from 'react-bootstrap';
import * as Api from "../../api";

const CareerSkills = ({portfolioOwnerId,isEditable, setIsEditing}) => {
  
  const skiils =[{value: '선택'}, {value: 'Java'}, {value: 'Javasript'}, {value: 'jquery'},
  {value: 'Python'},{value: 'Html5'},{value: 'Css3'},{value: 'node.js'},
  {value: 'react'},{value: 'mongodb'},{value: 'mongoose'}, {value: 'django'},
  {value: 'mysql'}, {value: 'aws'}, {value: 'linux'}, {value: 'spring framework'}];

  const [career, setCareer] = useState("");
  const [langue, setLangue] = useState({
    langue1: "",
    langue2:"",
    langue3: ""
  })

  const onChange = (e) => {
    setLangue(cur => {
      return {
        ...cur,
        [e.target.name]: e.target.value
      }
    })
    console.log(langue);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = portfolioOwnerId;

    //사용자가 입력한 데이터, post 요청! 
   try{
    // "project/create" 엔드포인트로 post요청함.
      await Api.post("skill/create", {
        userId,
        career,
        langue
      });

      // "projectlist/유저id" 엔드포인트로 get요청함.
      const res = await Api.get(`skillList/${userId}`);
      //setProjects(res.data);
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
      <Card className="skillCard">
        <Card.Body>
        <Form.Group>
     <Card.Title className='text-start'>경력</Card.Title>
     <Form.Select aria-label="Default select example" 
     disabled={ isEditable === false ? true : false}
     key={career}
     defaultValue={career}
    style={{
      width: "200px",
      marginBottom: "20px"
    }}>
      <option>---경력---</option>
      <option value="1">신입</option>
      <option value="2">1~3년</option>
      <option value="3">4~6년</option>
      <option value="2">7~9년</option>
     </Form.Select>
     </Form.Group>
     <Card.Title className='text-start'>주요 기술</Card.Title>
     <Form.Group>
     <Row>
     <Form.Select 
     aria-label="Default select example" 
     name="langue1"
     onChange={onChange}
     value={langue.langue1}
    style={{
      width: "200px",
      marginBottom: "20px",
      marginLeft: "13px"
    }}>
    {  skiils.map((skill, index) => {
        return (<option key={index} value={skill.value}>{skill.value}</option>)
       })
        }
      </Form.Select>
      <Form.Select aria-label="Default select example" 
      name="langue2"
      value={langue.langue2}
      onChange={onChange}
      style={{
      width: "200px",
      marginBottom: "20px",
      marginLeft: "20px"
      }}>
    {  skiils.map((skill, index) => {
        return (<option key={index} value={skill.value}>{skill.value}</option>)
       })
        }
      </Form.Select>
      <Form.Select aria-label="Default select example" 
      name="langue3"
      value={langue.langue3}
      onChange={onChange}
    style={{
      width: "200px",
      marginBottom: "20px",
      marginLeft: "20px"
    }}>
       {skiils.map((skill, index) => {
        return (<option key={index} value={skill.value}>{skill.value}</option>)
       })
        }
      </Form.Select>
      <Button
              mb="10"
              style={{
               border:"none",
               backgroundColor:"#339AF0",
               color: "#fffff"
               }} 
               size="sm"
               onClick={() => handleSubmit(true)}
               >
                 확인
        </Button>
     </Row>
     </Form.Group>
        </Card.Body>
     </Card>
   )
}

export default CareerSkills;
