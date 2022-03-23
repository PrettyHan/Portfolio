import { useNavigate } from "react-router-dom";
import { Card, Row, Button, Col, Container } from "react-bootstrap";

import './Style.css';

// homeUser
function UserCard({ user, skill,setIsEditing, isEditable, isNetwork, isClick }) {
  const navigate = useNavigate();

  const onClick = () => {
   navigate(`/users/${user.id}`);
  }

  return (
     <Card className={isClick ? "myPageCard" : "homeUserCard"} >
      <Card.Body>
        <Col className="justify-content-md-center">
          <Card.Img
            style={{ width: "12rem", height: "8rem" }}
            className="mb-3"
            src={('./imgs/example.png')}
            // alt="랜덤 고양이 사진 (http://placekitten.com API 사용)"          
          />
        </Col>
        <div className='userName'>{user?.name}</div>
        <div className='userEmail'>{user?.email}</div>
        {isEditable && (
          <Col>
           <div>{user?.description}</div>
            <Row className="mt-3 text-center text-info">
              <Col sm={{ span: 20 }}>
              <Button
               mb="10"
               style={{
                border:"none",
                backgroundColor:"#339AF0",
                color: "#fffff"
                }} 
                size="sm"
                onClick={() => setIsEditing(true)}
                >
                  편집
                </Button>
              </Col>
            </Row>
          </Col>
        )}

        {isNetwork && (
          <div style={{display: "flex", marginTop: "30px"}}>
          <button
            className='networkBtn'
            onClick={onClick}>
              포트폴리오
           </button>
           <div className='clickCount'>{user.visited}</div> 
          </div>
        )}
      </Card.Body>
      </Card>
  );
}

export default UserCard;
