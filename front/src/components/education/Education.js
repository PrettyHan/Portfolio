import {useState, useRef} from 'react';
import { Card, Row, Button, Col } from "react-bootstrap";
import EducationForm from './EducationForm';
import EducationList  from './EducationList';
import * as Api from "../../api";

const Education = () => {
  
  const [open, setOpen] = useState("");

  const [data, setData] = useState([]); //일단 변수 사용해서 test!
  
  const dataId = useRef(0); // Id를 생성하기 위해! => useRef 사용 

  // 생성
  const onCreate = async(school, major, position) => {
    const newItem = {
      school, // 학교명
      major, // 전공명
      position, // 
      education_id: dataId.current 
      // key 값으로 사용할 id => 백엔드와 연결할때 삭제 예정
    };

    dataId.current += 1;
    setData([newItem, ...data]);    
  };
  
  //편집
  const onEdit = (targetId, newSchool, newMajor, newPosition) => {
    setData(
      data.map((item) =>
        item.id === targetId ? { ...item, 
          school: newSchool, 
          major: newMajor, 
          position: newPosition } : item
      )
    );
  }

   return (
    <Card>
    <Card.Body>
        <Card.Title className='text-start'>학력</Card.Title>
        {data.map((item) => (
          <EducationList 
           key={item.education_id}
           school={item.school}
           major={item.major}
           position={item.position}
          />         
        ))}
        <Button onClick={() => setOpen(true)}>+</Button>
        {open && (
          <EducationForm onCreate={onCreate} onEdit={onEdit} dataList={data}/>
        )}
     </Card.Body>
   </Card> 
   );
}

export default Education;
