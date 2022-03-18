import {useState, useEffect ,useRef} from 'react';
import { Card, Row, Button, Col } from "react-bootstrap";
import ProjectForm from './ProjectForm';
import ProjectEdit  from './ProjectEdit';
import * as Api from "../../api";

// 제일 상위 컴포넌트! 
const Projects = ({portfolioOwnerId, isEditable}) => {
  
  const [open, setOpen] = useState(false); // Add 버튼 누르면 open!
  const [data, setData] = useState([]);
  
  const userId = portfolioOwnerId;
  
   useEffect(() => {
    Api.get(`projectlist/${userId}`).then((res) =>
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
              setOpen = {setOpen}
          />         
        ))}
        {isEditable && (
        <Button
         className='m-3'
         style={{
          border:"none",
          backgroundColor:"#CFD3FF",
          borderRadius:50
        }} 
        onClick={() => setOpen(true)}>+</Button>
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