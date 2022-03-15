import {useState} from 'react';
import { Card, Row, Button, Col } from "react-bootstrap";
import EducationItem from './EducationItem';

const Education = () => {
  
  const [open, setOpen] = useState("");

  const [data, setData] = useState([]); //일단 변수 사용해서 test!
  
  const onCreate = (school, major, position) => {
    const newItem = {
      school,
      major,
      position
    };
    setData([newItem]);
  };

   return (
    <Card>
    <Card.Body>
        <Card.Title>학력</Card.Title>
        <Button onClick={() => setOpen(true)}>+</Button>
        {open && (
          <EducationItem onCreate = {onCreate}/>
        )}
     </Card.Body>
   </Card> 
   );
}

export default Education;