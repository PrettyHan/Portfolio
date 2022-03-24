import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Form, Card, Button } from "react-bootstrap";

import * as Api from "../../api";
import UserCard from "./UserCard";
import { UserStateContext } from "../../App";

import './Style.css';

function SectionHome() {
  const navigate = useNavigate();
  const userState = useContext(UserStateContext);
  const [career, setCareer] = useState("");
  const [language, setLanguage] = useState("");
  const [users, setUsers] = useState([]);

  const skiils =[{value: '기술'}, {value: 'Java'}, {value: 'Javasript'}, {value: 'jquery'},
  {value: 'Python'},{value: 'Html5'},{value: 'Css3'},{value: 'node.js'},
  {value: 'react'},{value: 'mongodb'},{value: 'mongoose'}, {value: 'django'},
  {value: 'mysql'}, {value: 'aws'}, {value: 'linux'}, {value: 'spring framework'}];

  useEffect(() => {
    Api.get("userlist").then((res) => setUsers(res.data));
  }, [userState]);

  const onClick = async(e) => {
    e.preventDefault();
     const res = await Api.get(`skillListByCareer`, career);
     setUsers(res.data);
  }


  return (
    <>
    <div className='sectionHomeSelect'>
    <Form.Select aria-label="Default select example" 
      key={career}
      defaultValue={career}
      value={career}
      onChange={(e) => setCareer(e.target.value)}
      name="career"
    style={{
      width: "200px",
      marginBottom: "20px"
    }}>
       <option>선택</option>
      <option value="신입">신입</option>
      <option value="1~2년">1~2년</option>
      <option value="3~4년">3~4년</option>
      <option value="5~6년">5~6년</option>
      <option value="7~8년">7~8년</option>
     </Form.Select>
     <Form.Select 
     aria-label="Default select example"
     name="language"
     onChange={(e) => setLanguage(e.target.value)}
     value={language}
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
      <Button 
         mb="10"
         style={{
          border:"none",
          backgroundColor:"#339AF0",
          marginLeft: "20px",
          height: "40px"
        }}  
       variant="primary" 
       type="submit" 
       className="me-3"
       onClick={onClick}>
        검색
      </Button>
    </div>
    {/*  */}
     <Container className='my-2 ms-9'> 
      <div className='homeUsers'>
        {users.map((user) => (
          <UserCard key={user.id} user={user} isNetwork />
        ))}
      </div>
    </Container>
    </>
  );
}

export default SectionHome;
