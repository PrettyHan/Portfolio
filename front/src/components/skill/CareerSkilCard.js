import React, {useState} from 'react';
import { Form, Button, Col, Row, Card} from 'react-bootstrap';
import * as Api from "../../api";
import './CardStyle.css'

const CareerSkillCard = ({skill}) => {
  return (
    <Card.Text className='text-center'>
    <Row className="align-items-center">
      <div style={{
        marginTop: "10px",
        marginBottom: "10px",
        display: "flex"
      }}>
       <div className='cardItem'> {skill.career} </div>
         <div className='cardItem2'>
           {skill.language.language1} 
        </div>
        <div className='cardItem2'>
            {skill.language.language2} 
       </div>
       <div className='cardItem2'>
           {skill.language.language3}
       </div>
      </div>
    </Row>
  </Card.Text>
  )
}

export default CareerSkillCard;
