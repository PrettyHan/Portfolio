import React from 'react'
import { Card, Row, Col, Button} from "react-bootstrap";

/**
 * 학력 목록 컴포넌트입니다.
 * item : EducationForm 에서 전달받음.
 */
const EducationList = ({item, setIsEditing}) => {
  return (
    <Card.Text className='text-start'>
      <div class="alert alert-primary" role="alert">
      <Row className="align-items-start">
        <Col>
          <span>{item.school}</span>
          <br />
          <span className="text-muted">{`${item.major} (${
            item.position || ""
          })`}</span>
        </Col>
          <Col xs lg="1">
            <Button
              variant="outline-info"
              size="sm" 
              className="mr-3"
              onClick={() => setIsEditing((prev) => !prev)} 
            >
              편집
            </Button>
          </Col>
      </Row>
       </div>
    </Card.Text>
  );

}

export default EducationList;