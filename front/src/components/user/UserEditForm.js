import React, { useState } from "react";
import { Button, Form, Card, Col, Row } from "react-bootstrap";
import * as Api from "../../api";

import './Style.css';

function UserEditForm({ user, setIsEditing, setUser }) {
  //useState로 name 상태를 생성함.
  const [name, setName] = useState(user.name);
  //useState로 email 상태를 생성함.
  const [email, setEmail] = useState(user.email);
  //useState로 description 상태를 생성함.
  const [description, setDescription] = useState(user.description);

  const onChangeImg = (e) => {
    e.preventDefault();
    
    if(e.target.files){
      const uploadFile = e.target.files[0]
      console.log(uploadFile)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // "users/유저id" 엔드포인트로 PUT 요청함.
    try{
      const res = await Api.put(`users/${user.id}`, {
        name,
        email,
        description,
      });
      // 유저 정보는 response의 data임.
      const updatedUser = res.data;
      // 해당 유저 정보로 user을 세팅함.
      setUser(updatedUser);
  
      // isEditing을 false로 세팅함.
      setIsEditing(false);
    }
    catch(error){
      console.log(error);
      if (error.response) {
       const { data } = error.response;
       console.error("data : ", data);
       alert(data);
     }
  };
  };

  return (
    <Card className="userCardEdit">
      <Card.Body>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
            <Form.Control
              type="file"
              placeholder="파일"
              onChange={onChangeImg}
              //name={attachment}
            />
          </Form.Group>

          <Form.Group controlId="useEditName" className="mb-3">
            <Form.Control
              type="text"
              placeholder="이름"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="userEditEmail" className="mb-3">
            <Form.Control
              type="email"
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="userEditDescription">
            <Form.Control
              type="text"
              placeholder="정보, 인사말"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Row} className="mt-3 text-center">
            <Col sm={{ span: 20 }}>
              <Button 
               mb="10"
               style={{
                border:"none",
                backgroundColor:"#339AF0"
              }} 
              variant="primary" type="submit" className="me-3">
                확인
              </Button>
              <Button 
                mb="10"
                style={{
                 border:"none",
                 backgroundColor:"#C4C4C4"
               }} 
              variant="secondary" onClick={() => setIsEditing(false)}>
                취소
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default UserEditForm;
