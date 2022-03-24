import React, {useState} from 'react';
import { Form, Button, Col, Row} from 'react-bootstrap';
import * as Api from "../../api";

const ProjectAddForm = ({
  portfolioOwnerId, 
  setOpen,
  setProjects
}) => {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = portfolioOwnerId;

         //사용자가 입력한 데이터, post 요청! 
   try{
    // "project/create" 엔드포인트로 post요청함.
      await Api.post("project/create", {
        userId,
        title,
        content,
        fromDate,
        toDate
      });

      // "projectlist/유저id" 엔드포인트로 get요청함.
      const res = await Api.get(`projectlist/${userId}`);
      setProjects(res.data);
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
     <Form onSubmit={handleSubmit}  className="d-grid gap-2">
        <Form.Group>
        <Form.Control
            style={{marginBottom: "20px"}} 
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            name="projectTitle"
            value={title}
            placeholder="프로젝트 제목"/>

         <Form.Control
            style={{marginBottom: "20px"}} 
            type="text"
            name="content"
            value={content} 
            onChange={(e) => setContent(e.target.value)}
            placeholder="상세내역" /> 

        <div style={{display: "flex"}}>
        <Form.Control
          className="mr-3"
          style={{width: 200}}
          type="date"
          placeholder="시작날짜"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
        />
          <Form.Control
          className='mr-3'
          style={{width: 200, marginLeft: "10px"}}
          type="date"
          placeholder="종료날짜"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
        />
        </div>
      </Form.Group>

       <Form.Group as={Row} className="mt-3 text-center">
        <Col sm={{ span: 20}}>
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


export default ProjectAddForm;