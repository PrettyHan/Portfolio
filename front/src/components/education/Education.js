import {useState, useRef} from 'react';
import { Card, Row, Button, Col } from "react-bootstrap";
import EducationForm from './EducationForm';
import EducationList  from './EducationList';

const Education = () => {
  
  const [open, setOpen] = useState("");

  const [data, setData] = useState([]); //일단 변수 사용해서 test!
  
  const dataId = useRef(0); // Id를 생성하기 위해! => useRef 사용 

  const onCreate = (school, major, position) => {
    const newItem = {
      school,
      major,
      position,
      id: dataId.current
    };
    setData([newItem, ...data]);
    console.log(data);
  };

  const onEdit = () => {

  }

   return (
    <Card>
    <Card.Body>
        <Card.Title className='text-start'>학력</Card.Title>
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
          <EducationForm onCreate={onCreate} onEdit={onEdit}/>
        )}
     </Card.Body>
   </Card> 
   );
}

export default Education;