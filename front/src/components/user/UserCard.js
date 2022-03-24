import { useNavigate } from "react-router-dom";
import { Card, Row, Button, Col, Container } from "react-bootstrap";

import './Style.css';

// homeUser
function UserCard({ user,setIsEditing, isEditable, isNetwork, isClick }) {
  const navigate = useNavigate();

  const onClick = () => {
   navigate(`/user/${user.id}`);
  }

  return (
     <Card className={isClick ? "myPageCard" : "homeUserCard"} >
      <Card.Body style={{textAlign: "center"}}>
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
          <div style={{display: "flex", marginLeft:"150px",marginTop: "70px"}}>
          <button
            className='networkBtn'
            onClick={onClick}>
               🚀  
           </button>
           <div>👀</div>
           <div style={{color: "#868e96"}}>{user.visited}</div>
          </div>
        )}
      </Card.Body>
      </Card>
  );
}

export default UserCard;

//  className='clickCount'
