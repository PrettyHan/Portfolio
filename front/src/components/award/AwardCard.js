import { Card, Button, Row, Col } from "react-bootstrap";

function AwardCard({ award, isEditable, setIsEditing }) {
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

export default AwardCard;
