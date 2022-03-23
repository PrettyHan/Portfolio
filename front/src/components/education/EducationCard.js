import React from 'react'
import { Card, Row, Col, Button} from "react-bootstrap";

/**
 * 학력 목록 컴포넌트입니다.
 * item : EducationForm 에서 전달받음.
 */
const EducationCard = ({education, isEditable,setIsEditing}) => {

  return (
    <Card.Text className='text-start'>
      <Row className="align-items-start">
        <Col>
          <span >{education.school}</span>
          <span className="text-muted">{`${education.major} (${
            education.position || ""
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
    </Card.Text>
  );

}

export default EducationCard;
