import React, {useState} from 'react';
import { Form, Button, Col, Row, Card} from 'react-bootstrap';
import * as Api from "../../api";

const CareerSkillCard = ({
  portfolioOwnerId,
  isEditable, 
  etIsEditing, 
  skill,
  setSkill,
  setOpen, 
  checkData}) => {
  
  const skiils =[{value: '선택'}, {value: 'Java'}, {value: 'Javasript'}, {value: 'jquery'},
  {value: 'Python'},{value: 'Html5'},{value: 'Css3'},{value: 'node.js'},
  {value: 'react'},{value: 'mongodb'},{value: 'mongoose'}, {value: 'django'},
  {value: 'mysql'}, {value: 'aws'}, {value: 'linux'}, {value: 'spring framework'}];
 
  const [career, setCareer] = useState("");
  const [language, setLangue] = useState({
    language1: "",
    language2:"",
    language3: ""
  })


  const onChange = (e) => {
    setLangue(cur => {
      return {
        ...cur,
        [e.target.name]: e.target.value
      }
    })
  }

  const onChangeCareer = (e) => {
    const value = e.target.value;
    setCareer(value);
    console.log(career);
  }

  // 저장 (career, language data 없을때)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = portfolioOwnerId;
    console.log(userId);
   try{
      await Api.post("skill/create", {
        userId,
        career,
        language
      });

      const res = await Api.get(`skillList/${userId}`);
      setSkill(res.data);
    }
   catch(error){
      console.log(error);
      if (error.response) {
        const { data } = error.response;
        console.error("data : ", data);
        }
      }
    setOpen(false);  
  };

  console.log("get",skill);
  
  // 편집 (career, language data 가 존재하면 편집!)
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const userId = skill[0].userId;
    console.log(userId);

    console.log("dfd", userId);
    //사용자가 입력한 데이터, post 요청! 
   try{
      await Api.put(`skills/${skill[0].id}`, {
        userId,
        career,
        language
      });

      // "projectlist/유저id" 엔드포인트로 get요청함.
      const res = await Api.get(`skilllist/${userId}`);
      setSkill(res.data);
      console.log(skill);
    }
   catch(error){
      console.log(error);
      if (error.response) {
        const { data } = error.response;
        console.error("data : ", data);
        }
      }
    setOpen(false);  
  };

   return (
      <Card className="skillCard">
        <Card.Body>
        <Form.Group>
     <Card.Title className='text-start'>{skill.career}</Card.Title>
     <Form.Select aria-label="Default select example" 
     disabled={ isEditable === false ? true : false}
     key={career}
     onChange={onChangeCareer} 
     defaultValue={career}
    style={{
      width: "200px",
      marginBottom: "20px"
    }}>
      <option>---경력---</option>
      <option value="신입">신입</option>
      <option value="1~2년">1~2년</option>
      <option value="3~4년">3~4년</option>
      <option value="5~6">5~6년</option>
      <option value="7~8">7~8년</option>
     </Form.Select>
     </Form.Group>
     <Card.Title className='text-start'>주요 기술</Card.Title>
     <Form.Group>
     <Row>
     <Form.Select 
     aria-label="Default select example" 
     disabled={ isEditable === false ? true : false}
     name="language1"
     onChange={onChange}
     value={language.language1}
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
    disabled={ isEditable === false ? true : false}
      name="language2"
      value={language.language2}
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
     disabled={ isEditable === false ? true : false}
     name="language3"
     value={language.language3}
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
     </Row>
     </Form.Group>
     {checkData === true ?
     (
          <Col>
            <Row className="mt-3 text-center text-info">
              <Col sm={{ span: 20 }}>
              <Button
               mb="10"
               style={{
                border:"none",
                backgroundColor:"#339AF0",
                color: "#fffff"
                }} 
                size="sm"
                onClick={handleEditSubmit}
                >
                  편집
                </Button>
              </Col>
            </Row>
          </Col>
        ) : 
        (
          <Col>
          <Row className="mt-3 text-center text-info">
            <Col sm={{ span: 20 }}>
            <Button
             mb="10"
             style={{
              border:"none",
              backgroundColor:"#339AF0",
              color: "#fffff"
              }} 
              size="sm"
              onClick={handleSubmit}
              >
               처음 저장(데이터값 없음)
              </Button>
            </Col>
          </Row>
        </Col>
        )
        }
        </Card.Body>
     </Card>
   )
}

export default CareerSkillCard;
