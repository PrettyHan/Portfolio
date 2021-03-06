import React, { useState } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import * as Api from "../../api";

function AwardAddForm({ portfolioOwnerId, setAwards, setIsAdding }) {
  //useState로 title 상태를 생성
  const [title, setTitle] = useState("");
  //useState로 description 상태를 생성
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // portfolioOwnerId를 userId 변수에 할당
    const userId = portfolioOwnerId;
    
    try{
    // "award/create" 엔드포인트로 POST 요청
      await Api.post("award/create", {
      userId: portfolioOwnerId,
      title,
      description,
    });

    // "awardlist/유저id" 엔드포인트로 GET 요청
    const res = await Api.get("awardlist", userId);
    // awards를 response의 data로 세팅
    setAwards(res.data);
    // award를 추가하는 과정이 끝났으므로, isAdding을 false로 세팅
    setIsAdding(false);
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
      <Form.Group controlId="awardAddTitle">
        <Form.Control
          type="text"
          placeholder="수상내역"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="awardAddDescription" className="mt-3">
        <Form.Control
          type="text"
          placeholder="상세내역"
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
        onClick={() => setIsAdding((prev) => !prev)}
        >
         취소
        </Button>
        </Col>
      </Form.Group>
      </Form>
  );
}

export default AwardAddForm;
