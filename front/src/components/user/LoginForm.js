import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Col, Row, Form, Button, Modal, NavLink } from "react-bootstrap";

import * as Api from "../../api";
import { DispatchContext } from "../../App";

const LoginForm = ({show, handleClose, handleShow, showRegister}) => {
  const navigate = useNavigate();
  const dispatch = useContext(DispatchContext);

  //useState로 email 상태를 생성함.
  const [email, setEmail] = useState("");
  //useState로 password 상태를 생성함.
  const [password, setPassword] = useState("");

  //이메일이 abc@example.com 형태인지 regex를 이용해 확인함.
  const validateEmail = (email) => {
    return email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  //위 validateEmail 함수를 통해 이메일 형태 적합 여부를 확인함.
  const isEmailValid = validateEmail(email);
  // 비밀번호가 4글자 이상인지 여부를 확인함.
  const isPasswordValid = password.length >= 4;
  //
  // 이메일과 비밀번호 조건이 동시에 만족되는지 확인함.
  const isFormValid = isEmailValid && isPasswordValid;


  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      // "user/login" 엔드포인트로 post요청함.
      const res = await Api.post("user/login", {
        email,
        password,
      });
      const user = res.data;
      const jwtToken = user.token;
      sessionStorage.setItem("userToken", jwtToken);
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: user,
      });

      // 기본 페이지로 이동함
      navigate("/", { replace: true });
      e.target.reset();
      handleClose(false);
      setEmail("");
      setPassword("");
    } catch (err) {
      setEmail("");
      setPassword("");
      e.target.reset();
      console.log("로그인에 실패하였습니다.\n", err);
      alert(`${err}🥲`);
    }

  };

  return (
    <>
       <Modal
         size='lg'
         style={{
           borderRadius:"50px"         
         }}
         dialogClassName={"primaryModal"}
         aria-labelledby="contained-modal-title-vcenter"
         centered
        show={show} className="loginModal" >
       <Modal.Header closeButton onClick={handleClose} />
        <Row className="justify-content-md-center mt-5">
        <Col lg={8}>
        <Modal.Title className='modalTitle'>Login</Modal.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="loginEmail">
              <Form.Label>이메일 주소</Form.Label>
              <Form.Control
                type="email"
                autoComplete="on"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {!isEmailValid && (
                <Form.Text className="text-success">
                  이메일 형식이 올바르지 않습니다.
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group controlId="loginPassword" className="mt-3">
              <Form.Label>비밀번호</Form.Label>
              <Form.Control
                type="password"
                autoComplete="on"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {!isPasswordValid && (
                <Form.Text className="text-success">
                  비밀번호는 4글자 이상입니다.
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group as={Row} className="mt-3 text-center">
              <Col sm={{ span: 20 }}>
                <Button variant="primary" 
                type="submit"
                 disabled={!isFormValid}
                 style={{marginBottom: "30px"}}
                 >
                  로그인
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
       </Modal>
    </>
  );
}
export default LoginForm;
