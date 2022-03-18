import React from 'react'
import { Card, Row, Col, Button} from "react-bootstrap";

/**
 * item : ProjectForm 에서 전달받음.
 */
const ProjectList = ({addItem, isEditable,setIsEditing}) => {
  console.log(`item: ${addItem}`);
  return (
    <Card.Text>
    <Row className="justify-content-between align-items-center mb-2">
      <Col>
        {addItem.title}
        <br />
        <span className="text-muted">{addItem.content}</span>
        <br />
        <span className="text-muted">
          {`${addItem.from_date} ~ ${addItem.to_date}`}
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

export default ProjectList;
