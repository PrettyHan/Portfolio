import { useNavigate } from "react-router-dom";
import { Card, Row, Button, Col, Image } from "react-bootstrap";

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
            style={{ width: "10rem", height: "8rem" , marginTop: "20px" }}
            className="mb-3"
            src={('./imgs/lion.png')}  
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
          <div style={{display: "flex", marginLeft:"10px",marginTop: "50px"}}>
          <button
            className='networkBtn'
            onClick={onClick}>
               🚀  
           </button>
           <div>
           <Image className="homeImg" src={('./imgs/eye.png')}/>
           </div>
           <div className='clickCount'  style={{color: "#868e96"}}>{user.visited}</div>
          </div>
        )}
      </Card.Body>
      </Card>
  );
}

export default UserCard;

//  className='clickCount'
