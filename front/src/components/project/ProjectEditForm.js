import React, {useState} from 'react';
import { Form, Button, Col, Row} from 'react-bootstrap';
import * as Api from "../../api";

const ProjectEdictForm = ({ editProject, setEditProject, setIsEditing,}) => {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [from_date, setFromDate] = useState(new Date(editProject.fromDate));
  const [to_date, setToDate] = useState(new Date(editProject.toDate));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = editProject.userId;

    // console.log(`여기서: -------------${userId}`);
    // console.log(`여기서: -------------${editProject.id}`)

    const fromDate = from_date.toISOString().split("T")[0];
    const toDate = to_date.toISOString().split("T")[0];
 
    await Api.put(`projects/${editProject.id}`, {
      userId,
      title,
      content,
      fromDate,
      toDate
    });

    const res = await Api.get(`projectlist/${userId}`);
    setEditProject(res.data);
    setIsEditing(false);
  };

  
  return (
    <Form onSubmit={handleSubmit}  className="d-grid gap-2">
       <Form.Group as={Row} className="mt-3">
       <Form.Control
           className="p-2 bg-light border mb-2"
           type="text"
           onChange={(e) => setTitle(e.target.value)}
           name="projectTitle"
           value={title}
           placeholder="프로젝트 제목"/>

        <Form.Control
           className="p-2 bg-light border mb-2" 
           type="text"
           name="content"
           value={content} 
           onChange={(e) => setContent(e.target.value)}
           placeholder="상세내역" /> 

         <Form.Control
         className="mr-3"
         style={{width: 200}}
         type="date"
         placeholder="시작날짜"
         value={from_date}
         onChange={(e) => setFromDate(e.target.value)}
       />
         <Form.Control
         className='mr-3'
         style={{width: 200}}
         type="date"
         placeholder="종료날짜"
         value={to_date}
         onChange={(e) => setToDate(e.target.value)}
       />
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
       onClick={() => setIsEditing(false)}
       >
        취소
       </Button>
       </Col>
     </Form.Group>
     </Form>

 )}


export default ProjectEdictForm;
