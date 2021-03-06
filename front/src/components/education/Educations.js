import {useState, useEffect ,useRef} from 'react';
import { Card, Row, Button, Col } from "react-bootstrap";
import EducationAddForm from './EducationAddForm';
import Education  from './Education';
import * as Api from "../../api";


const Educations = ({portfolioOwnerId, isEditable}) => {
  
  const [open, setOpen] = useState(false); 
  const [educations, setEducations] = useState([]);
  
  // 삭제기능
  const deleteHandler = async (id) => {
    try {
      if (window.confirm('정말로 삭제하시겠습니까?')) {
        await Api.delete(`education/${id}`);
        await Api.get(`educationlist/${portfolioOwnerId}`).then((res) => setEducations(res.data));
        alert('삭제가 완료되었습니다.');
      }
    } 
    catch (error) {
      alert('삭제에 실패하였습니다. 다시 시도해주세요.', error)
    }
};

  
   useEffect(() => { 
    try{
      Api.get(`educationlist` ,portfolioOwnerId).then((res) =>
      setEducations(res.data));
    } 
    catch(error){
      console.log(error);
      if (error.response) {
       const { data } = error.response;
       console.error("data : ", data);
     }
    }
      }, [portfolioOwnerId]);
  

      return (
        <Card>
        <Card.Body>
            <Card.Title className='text-start'>🎓 학력</Card.Title>
            { educations.map((education) => (
              <Education
                  key = {education.id} 
                  education={education} 
                  setEducations= {setEducations}
                  isEditable = {isEditable}
                  deleteHandler={deleteHandler}
              />         
            ))}
             {isEditable && (
            <Row className="mt-3 text-center mb-4">
            <Col sm={{ span: 20 }}>
            <Button
             className='m-3'
             style={{
              border:"none",
              backgroundColor:"#CFD3FF",
              borderRadius:50
            }} 
            onClick={() => setOpen(true)}>+</Button>
            </Col>
            </Row>
            )}
              {open && (
              <EducationAddForm  
              portfolioOwnerId = {portfolioOwnerId}
               setOpen = {setOpen}
               setEducations = {setEducations} 
              />
            )}
         </Card.Body>
       </Card> 
       );
}

export default Educations;
