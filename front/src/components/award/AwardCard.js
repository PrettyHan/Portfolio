import { Card, Button, Row, Col } from "react-bootstrap";
import * as Api from '../../api'

function AwardCard({ award, isEditable, setIsEditing, deleteHandler }) {
  
//   // 삭제기능
//   const deleteHandler = async () => {
//     const userId = award.userId;
//     await Api.delete(`award/${award.id}`);
//     await Api.get('awardlist', userId).then((res) => setAwards(res.data));
// };

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
              onClick={() => deleteHandler(award.id)}
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
