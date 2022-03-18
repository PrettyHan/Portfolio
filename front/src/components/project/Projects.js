import {useState, useEffect ,useRef} from 'react';
import { Card, Row, Button, Col } from "react-bootstrap";
import ProjectAddForm from './ProjectAddForm';
import Project from './Project';
import * as Api from "../../api";

// 제일 상위 컴포넌트! 
const Projects = ({portfolioOwnerId, isEditable}) => {
  
  const [open, setOpen] = useState(false); // Add 버튼 누르면 open!
  const [projects, setProjects] = useState([]);
  
   useEffect(() => {
    Api.get(`projectlist/${portfolioOwnerId}`).then((res) =>
    setProjects(res.data));
    }, [portfolioOwnerId]);

   return (
    <Card>
    <Card.Body>
        <Card.Title className='text-start'>프로젝트</Card.Title>
        { projects.map((project) => (
          <Project 
              key={project.id}
              project={project} 
              setProjects= {setProjects}
              isEditable = {isEditable}
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
          <ProjectAddForm  
           portfolioOwnerId = {portfolioOwnerId}
           setOpen = {setOpen}
           setProjects = {setProjects}
          />
        )}
     </Card.Body>
   </Card> 
   );
}

export default Projects;