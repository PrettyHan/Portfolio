import { Card, Button, Row, Col } from "react-bootstrap";

function CommentCard({ certificate, isEditable, setIsEditing }) {
    // const whenDate = ''+ certificate.whenDate;
    const stringwhenDate = ''+ certificate.whenDate;
    const whenDate = stringwhenDate.substring(0,10);
  

  return (
    <Card.Text>
      <Row className="align-items-center">
      <Col>
      <div style={{
          display: "flex" ,
          marginTop: "10px"
          }}>
        <div className='mvpCardItem'>
        {certificate.title}</div>
        </div>
        </Col>
      </Row>
    </Card.Text>
  );
}

export default CommentCard;
