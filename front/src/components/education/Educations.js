import {useState, useEffect ,useRef} from 'react';
import { Card, Row, Button, Col } from "react-bootstrap";
import EducationForm from './EducationForm';
import EducationEdit  from './EducationEdit';
import * as Api from "../../api";

// 제일 상위 컴포넌트! 
const Educations = ({portfolioOwnerId, isEditable}) => {
  
  //console.log(portfolioOwnerId);
  const [open, setOpen] = useState(false); // Add 버튼 누르면 open!
  const [data, setData] = useState([]);
  
  console.log(isEditable);
  
   useEffect(() => {
    //사용자의 educations 이력 받아옴. 
    Api.get(`educationlist` ,portfolioOwnerId).then((res) =>
     setData(res.data));
    }, [portfolioOwnerId]);

   return (
    <Card>
    <Card.Body>
        <Card.Title className='text-start'>학력</Card.Title>
        { data.map((item) => (
          <EducationEdit 
              item={item} 
              setData= {setData}
              isEditable = {isEditable}
          />         
        ))}
        {isEditable && (
        <Button onClick={() => setOpen(true)}>+</Button>
        )}
          {open && (
          <EducationForm  
          portfolioOwnerId = {portfolioOwnerId}
           setOpen = {setOpen}
           data = {data}
           setData = {setData} 
          />
        )}
     </Card.Body>
   </Card> 
   );
}

export default Educations;