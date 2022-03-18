import React from 'react'
import { Card, Row, Col, Button} from "react-bootstrap";

/**
 * item : ProjectForm 에서 전달받음.
 */
const ProjectCard = ({project, isEditable, setIsEditing}) => {
 
  return (
    <Card.Text>
    <Row className="justify-content-between align-items-center mb-2">
      <Col>
        {project.title}
        <br />
        <span className="text-muted">{project.content}</span>
        <br />
        <span className="text-muted">
          {`${project.f_date.substring(0,10)} ~ ${project.t_date.substring(0,10)}`}
        </span>
      </Col>
      {isEditable && (
        <Col xs lg="1">
          <Button
            variant="outline-info"
            size="sm"
            onClick={() => setIsEditing((prev) => !prev)}
            className="mr-3"
          >
            편집
          </Button>
        </Col>
      )}
    </Row>
  </Card.Text>
  );

}

export default ProjectCard;
