import React from 'react'
import { Card, Row, Col, Button} from "react-bootstrap";

const ProjectCard = ({project, isEditable, setIsEditing}) => {

  const stringFromDate = ''+project.f_date;
  const stringToDate= ''+project.t_date;

  const fromDate = stringFromDate.substring(0,10);
  const toDate = stringToDate.substring(0,10);


  return (
    <Card.Text>
    <Row className="justify-content-between align-items-center mb-2">
      <Col>
        {project.title}
        <br />
        <span className="text-muted">{project.content}</span>
        <br />
        <span className="text-muted">
              {`${fromDate} ~ ${toDate}`}
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