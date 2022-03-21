import React, { useState } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import * as Api from "../../api";

function CertificateAddForm({
  portfolioOwnerId,
  setCertificates,
  setIsAdding,
}) {
  //useState로 title 상태를 생성
  const [title, setTitle] = useState("");
  //useState로 description 상태를 생성
  const [description, setDescription] = useState("");
  //useState로 whenDate 상태를 생성
  const [putWhenDate, setWhenDate] = useState(new Date());

  const handleSubmit = async (e) => {
    e.preventDefault();

    // portfolioOwnerId를 userId 변수에 할당
    const userId = portfolioOwnerId;
    const whenDate = putWhenDate.toISOString().split("T")[0];
    
    try{
    // "certificate/create" 엔드포인트로 POST 요청
    await Api.post("certificate/create", {
      userId,
      title,
      description,
      whenDate,
    });

    // "educationlist/유저id" 엔드포인트로 GET 요청
    const res = await Api.get("certificatelist", userId);
    // certificates를 response의 data로 세팅
    setCertificates(res.data);
    // certificate를 추가하는 과정이 끝났으므로, isAdding을 false로 세팅
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
      <Form.Group controlId="certificateAddTitle">
        <Form.Control
          type="text"
          placeholder="자격증 제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="certificateAddDescription" className="mt-3">
        <Form.Control
          type="text"
          placeholder="상세내역"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group as={Row} className="mt-3">
        <Col xs="auto">
          <DatePicker
            selected={putWhenDate}
            onChange={(date) => setWhenDate(date)}
          />
        </Col>
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

export default CertificateAddForm;
