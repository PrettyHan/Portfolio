import React from 'react'
import { Card, Row, Col, Button} from "react-bootstrap";
import * as Api from '../../api'

/**
 * 학력 목록 컴포넌트입니다.
 * item : EducationForm 에서 전달받음.
 */
const EducationCard = ({ education, isEditable, setIsEditing, setEducations }) => {

  // 삭제기능
  const deleteHandler = async () => {
    const userId = education.userId;
    await Api.delete(`education/${education.id}`);
    await Api.get('educationlist', userId).then((res) => setEducations(res.data));
};

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

export default EducationCard;
