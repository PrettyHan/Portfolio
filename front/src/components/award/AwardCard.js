import { Card, Button, Row, Col } from "react-bootstrap";
import * as Api from '../../api'

function AwardCard({ award, isEditable, setIsEditing, setAwards }) {
  
  // 삭제기능
  const deleteHandler = async () => {
    const userId = award.userId;
    await Api.delete(`award/${award.id}`);
    await Api.get('awardlist', userId).then((res) => setAwards(res.data));
};

  return (
    <Card.Text>
      <Row className="align-items-center">
        <Col>
          <span>{award.title}</span>
          <span className="text-muted">{award.description}</span>
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

export default AwardCard;
