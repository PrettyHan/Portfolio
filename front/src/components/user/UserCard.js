import { useNavigate } from "react-router-dom";
import { Card, Row, Button, Col, Container } from "react-bootstrap";
import * as Api from "../../api";

import './Style.css';

// homeUser
function UserCard({ user, setIsEditing, isEditable, isNetwork, isClick }) {
  const navigate = useNavigate();

  // 탈퇴기능
  const deleteUser = async (id) => {
    try {
      if (window.confirm('정말로 탈퇴하시겠습니까?')) {
        await Api.delete(`user/${id}`);
        alert('탈퇴가 완료되었습니다. 이용해주셔서 감사합니다.');
        navigate('/', { replace: true });
      }
    } 
    catch (error) {
      alert('탈퇴에 실패하였습니다. 다시 시도해주세요.', error)
    }
    
};

  const onClick = () => {
   navigate(`/user/${user.id}`);
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
                <Button
                  className="ml-3 mr-3"
                  variant="outline-danger"
                  size="sm"
                  onClick={() => deleteUser(user.id)}
                >
                  탈퇴
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
