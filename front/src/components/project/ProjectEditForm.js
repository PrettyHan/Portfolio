import React, {useState} from 'react';
import { Form, Button, Col, Row} from 'react-bootstrap';
import * as Api from "../../api";

const ProjectEdictForm = ({ editProject, setEditProject, setIsEditing,}) => {

  const [title, setTitle] = useState(editProject.title);
  const [content, setContent] = useState(editProject.content);
  const [fromDate, setFromDate] = useState(new Date(editProject.f_date));
  const [toDate, setToDate] = useState(new Date(editProject.t_date));

  const [warning, setWarning] = useState(false);

  const [disable, setDisalbe] = useState(false);

  const selectDate = (event) => {
     if(event.target.value < fromDate) {
       setToDate(new Date());
       console.log(new Date());
       setWarning(true);
       setDisalbe(true);
     }
     else {
      setToDate(event.target.value);
      setWarning(false);
      setDisalbe(false);
     }
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = editProject.userId;

    try{
      await Api.put(`project/${editProject.id}`, {
        userId,
        title,
        content,
        fromDate,
        toDate
      });
  
      const res = await Api.get(`projectlist/${userId}`);
      setEditProject(res.data);
      setIsEditing(false);
    }
    catch(error){
      console.log(error);
      if (error.response) {
       const { data } = error.response;
       console.error("data : ", data);
     }
  };
}

  
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
         value={fromDate}
         onChange={(e) => setFromDate(e.target.value)}
       />
         <Form.Control
         className='mr-3'
         style={{width: 200}}
         type="date"
         placeholder="종료날짜"
         value={toDate}
         onChange={selectDate}

       />
     </Form.Group>
     {warning && (
        <p style={{color:"red"}}>종료날짜가 시작날짜 이전 날짜입니다.</p>
      )}

      <Form.Group as={Row} className="mt-3 text-center">
       <Col sm={{ span: 20}}>
       <Button
        mb="10"
        disabled={disable}
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