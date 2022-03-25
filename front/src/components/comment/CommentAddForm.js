import React, { useState } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import * as Api from "../../api";

function CommentAddForm({
  portfolioOwner,
  portfolioOwnerId,
  setComments,
  comments
}) {

  const [content, setPutComment] = useState("");
   
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = portfolioOwnerId;

    const author = portfolioOwner.name;

    const date = "111";

    // "certificate/create" 엔드포인트로 POST 요청
    await Api.post("comment/create", {
      author,
      content
    });

  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="certificateAddTitle">
        <Form.Control
          type="text"
          placeholder="리뷰를 남겨주세요."
          value={content}
          onChange={(e) => setPutComment(e.target.value)}
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
           onClick={handleSubmit}
           variant="primary"
            type="submit"
            className="me-3">
            확인
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default CommentAddForm;