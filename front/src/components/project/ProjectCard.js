import React from 'react'
import { Card, Row, Col, Button} from "react-bootstrap";
import * as Api from '../../api'

const ProjectCard = ({project, isEditable, setIsEditing, setProjects}) => {

  const stringFromDate = ''+project.fromDate;
  const stringToDate= ''+project.toDate;

  const fromDate = stringFromDate.substring(0,10);
  const toDate = stringToDate.substring(0,10);

  // 삭제기능
  const deleteHandler = async () => {
    const userId = project.userId;
    await Api.delete(`project/${project.id}`);
    await Api.get('projectlist', userId).then((res) => setProjects(res.data));
};

  return (
    <Card.Text>
    <Row className="justify-content-between align-items-center mb-2">
      <Col>
        {project.title}
        <span className="text-muted">{project.content}</span>
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
            className="mr-3 mb-1"
          >
            편집
          </Button>
          <Button
              className="mr-3"
              variant="danger"
              size="sm"
              onClick={deleteHandler}
            >
              삭제
            </Button>
        </Col>
      )}
    </Row>
  </Card.Text>
  );

}

export default ProjectCard;
