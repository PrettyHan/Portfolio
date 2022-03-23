import { useNavigate } from "react-router-dom";
import { Card, Row, Button, Col, Container } from "react-bootstrap";

import './Style.css';


// homeUser
function UserCard({ user, setIsEditing, isEditable, isNetwork, isClick }) {
  const navigate = useNavigate();

  return (
     <Card className={isClick ? "myPageCard" : "homeUserCard"} >
      <Card.Body>
        <Col className="justify-content-md-center">
          <Card.Img
            style={{ width: "12rem", height: "8rem" }}
            className="mb-3"
            src={('./imgs/example.png')}
            alt="랜덤 고양이 사진 (http://placekitten.com API 사용)"
          />
        </Col>
        <Card.Title>{user?.name}</Card.Title>
        <Card.Subtitle>{user?.email}</Card.Subtitle>
        <Card.Text>{user?.description}</Card.Text>
        <Card.Footer>{user?.visited}</Card.Footer>
        {isEditable && (
          <Col>
            <Row className="mt-3 text-center text-info">
              <Col sm={{ span: 20 }}>
                <Button
                  mb="10"
                  style={{
                    border: "none",
                    backgroundColor: "#339AF0",
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
          <Button
            className="mt-3"
            href="#"
            onClick={navigateTo}
          >
            포트폴리오
          </Button>
        )}
      </Card.Body>
      </Card>
  );
}

export default UserCard;
