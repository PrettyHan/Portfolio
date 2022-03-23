import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

import * as Api from "../../api";
import UserCard from "./UserCard";
import { UserStateContext } from "../../App";

import './Style.css';

function SectionHome() {
  const navigate = useNavigate();
  const userState = useContext(UserStateContext);
  // useState 훅을 통해 users 상태를 생성함.
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // "userlist" 엔드포인트로 GET 요청을 하고, users를 response의 data로 세팅함.
    Api.get("userlist").then((res) => setUsers(res.data));
  }, [userState]);

  return (
    <>
     <Container className='my-2 ms-9'> 
      <div className='homeUsers'>
        {users.map((user) => (
          <UserCard key={user.id} user={user} isNetwork />
        ))}
      </div>
    </Container>
    </>
  );
}

export default SectionHome;
