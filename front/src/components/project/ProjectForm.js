import React, {useState} from 'react';
import { Form, Button, Col, Row} from 'react-bootstrap';
import DatePicker from "react-datepicker";
import * as Api from "../../api";

const ProjectForm = ({
  portfolioOwnerId, 
  setOpen,
  setData,
  data
}) => {

  const [project, setProject] = useState("");
  const [content, setContent] = useState("");
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = portfolioOwnerId
    const from_date = fromDate.toISOString().split("T")[0];
    const to_date = toDate.toISOString().split("T")[0];

    // "project/create" 엔드포인트로 post요청함.
    await Api.post("project/create", {
      userId,
      project,
      content,
      from_date,
      to_date,
    });

    // "projectlist/유저id" 엔드포인트로 get요청함.
    const res = await Api.get("projectlist", userId);
    setProject(res.data);
    setOpen(false);
  };

  
  return (
     <Form onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Control 
            type="text"
            onChange={(e) => setProject(e.target.value)}
            name="projectTitle"
            value={project}
            placeholder="프로젝트 제목"/>
        </Form.Group>

        <Form.Group >
            <Form.Control 
            type="text"
            name="content"
            value={content} 
            onChange={(e) => setContent(e.target.value)}
            placeholder="상세내역" />
        </Form.Group>

        <Form.Group as={Row}
        className="mt-3" 
        >
        <Col xs="auto">
          <DatePicker
            selected={fromDate}
            onChange={(date) => setFromDate(date)}
          />
        </Col>
        <Col xs="auto">
          <DatePicker selected={toDate} onChange={(date) => setToDate(date)} />
        </Col>
      </Form.Group>

   
        <Form.Group as={Row} className="mt-3 text-center">
        <Col sm={{ span: 20 }}>
        <Button 
        variant="primary" 
        type="submit" 
        className="me-3">
         확인
        </Button>
        <Button 
        variant="secondary" 
        onClick={() => setOpen((prev) => !prev)}
        >
         취소
        </Button>
        </Col>
      </Form.Group>
      </Form>

  )}


export default ProjectForm;
