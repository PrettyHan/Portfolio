import React from 'react'
import { Card, Row, Col, Button} from "react-bootstrap";

/**
 * 학력 목록 컴포넌트입니다.
 * item : EducationForm 에서 전달받음.
 */
const EducationList = ({addItem, isEditable,setIsEditing}) => {
  console.log(`item: ${addItem}`);
  return (
    <Card.Text className='text-start'>
      <div class="alert alert-primary" role="alert">
      <Row className="align-items-start">
        <Col>
          <span>{addItem.school}</span>
          <br />
          <span className="text-muted">{`${addItem.major} (${
            addItem.position || ""
          })`}</span>
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
       </div>
    </Card.Text>
  );

}

export default EducationList;
