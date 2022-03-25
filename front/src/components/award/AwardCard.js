import { Card, Button, Row, Col } from "react-bootstrap";
import * as Api from '../../api'

function AwardCard({ award, isEditable, setIsEditing, deleteHandler }) {

  return (
    <Card.Text>
      <Row className="align-items-center">
        <Col>
        <div style={{
          display: "flex" ,
          marginTop: "10px"}}>
        <div className='mvpCardItem'>
           {award.title}
            </div>
        <div className='mvpCardItem2'>
             {award.description}
        </div>
        </div>
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
              variant="outline-danger"
              size="sm"
              onClick={() => deleteHandler(true)}
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
