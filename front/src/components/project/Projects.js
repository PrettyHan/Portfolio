import {useState, useEffect ,useRef} from 'react';
import { Card, Row, Button, Col } from "react-bootstrap";
import ProjectForm from './ProjectForm';
import ProjectEdit  from './ProjectEdit';
import * as Api from "../../api";

// 제일 상위 컴포넌트! 
const Projects = ({portfolioOwnerId, isEditable}) => {
  
  //console.log(portfolioOwnerId);
  const [open, setOpen] = useState(false); // Add 버튼 누르면 open!
  const [data, setData] = useState([]);
  
  console.log(isEditable);
  const userId = portfolioOwnerId;
  
   useEffect(() => {
    //사용자의 educations 이력 받아옴. 
    Api.get(`educationlist/${userId}`).then((res) =>
     setData(res.data));
    }, [userId]);

   return (
    <Card>
    <Card.Body>
        <Card.Title className='text-start'>프로젝트</Card.Title>
        { data.map((item) => (
          <ProjectEdit 
              item={item} 
              setData= {setData}
              isEditable = {isEditable}
          />         
        ))}
        {isEditable && (
        <Button onClick={() => setOpen(true)}>+</Button>
        )}
          {open && (
          <ProjectForm  
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

export default Projects;