import { useNavigate } from "react-router-dom";
import { Card, Row, Button, Col } from "react-bootstrap";
import { alignPropType } from "react-bootstrap/esm/types";
import React, { useState } from "react";
import * as Api from "../../api";



function UserCard({ user, setIsEditing, isEditable, isNetwork }) {
  const navigate = useNavigate();
  // const [visited, setVisited] = useState(user.visited);
  // const visitedHandler = async ({ user, setUser, visited, setVisited }) => {
  //   setVisited(visited + 1)
  //   const res = await Api.put(`users/${user.id}`, {
  //     visited: setVisited
  //   });
  //   // 유저 정보는 response의 data임.
  //   const updatedUser = res.data;
  //   // 해당 유저 정보로 user을 세팅함.
  //   setUser(updatedUser);
  //   navigate(`/users/${user.id}`)
  // }
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Col className="justify-content-md-center">
          <Card.Img
            style={{ width: "10rem", height: "8rem" }}
            className="mb-3"
            src="http://placekitten.com/200/200"
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
          <Card.Link
            className="mt-3"
            href="#"
            onClick={navigate(`/users/${user.id}`)}
          >
            포트폴리오
          </Card.Link>
        )}
      </Card.Body>
    </Card>
  );
}

export default UserCard;
