import {useState} from 'react';
import { Card, Row, Button, Col } from "react-bootstrap";
import EducationForm from './EducationForm';
import EducationList  from './EducationList';

const Education = () => {
  
  const [open, setOpen] = useState("");

  const [data, setData] = useState([]); //일단 변수 사용해서 test!
  
  const onCreate = (school, major, position) => {
    console.log("Education:", school);
    const newItem = {
      school,
      major,
      position
    };
    setData([newItem, ...data]);
    console.log(data);
  };

   return (
    <Card>
    <Card.Body>
        <Card.Title>학력</Card.Title>
        {data.map((item) => (
          <EducationList 
           key={item.id}
           school={item.school}
           major={item.major}
           position={item.position}
          />         
        ))}
        <Button onClick={() => setOpen(true)}>+</Button>
        {open && (
          <EducationForm onCreate={onCreate}/>
        )}
     </Card.Body>
   </Card> 
   );
}

export default Education;