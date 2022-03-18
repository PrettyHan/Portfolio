import {useState, useEffect ,useRef} from 'react';
import { Card, Row, Button, Col } from "react-bootstrap";
import EducationAddForm from './EducationAddForm';
import Education  from './Education';
import * as Api from "../../api";


const Educations = ({portfolioOwnerId, isEditable}) => {
  
  const [open, setOpen] = useState(false); 
  const [educations, setEducations] = useState([]);
  
  
   useEffect(() => { 
    Api.get(`educationlist` ,portfolioOwnerId).then((res) =>
    setEducations(res.data));
    }, [portfolioOwnerId]);

   return (
    <Card>
    <Card.Body>
        <Card.Title className='text-start'>학력</Card.Title>
        { educations.map((education) => (
          <Education
              key = {education.id} 
              education={education} 
              setEducations= {setEducations}
              isEditable = {isEditable}
          />         
        ))}
        {isEditable && (
        <Button onClick={() => setOpen(true)}>+</Button>
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