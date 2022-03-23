import React, {useState, useEffect} from 'react';
import { Form, Button, Col, Row, Card} from 'react-bootstrap';
import CareerSkillCard from "./CareerSkillCard";
import * as Api from "../../api";

const CareerSkills = ({portfolioOwnerId, isEditable}) => {
  
  const [isEditing, setIsEditing] = useState(false); // 편집버튼 
  const [checkData, setCheckData] = useState(false); // data 유무 확인 
  const [open, setOpen] = useState(false);
  const [skill, setSkill] = useState([]); // 백에서 가져옴
  
  useEffect(() => { 
    try{
      Api.get(`skillList` ,portfolioOwnerId).then((res) => 
      setSkill(res.data)   
      );
    } 
    catch(error){
      console.log(error);
      if (error.response) {
       const { data } = error.response;
       console.error("data : ", data);
     }
    }
  }, [portfolioOwnerId]);

  const onClick = () => {
    setOpen((prev)=> !prev);
    if(skill.length > 0){
      setCheckData(true);
    }
    
  }

  console.log(skill[0].career);

   return (
     <>
      <div>{skill[0].career}</div>
      { isEditable && (
       <Button onClick={onClick}>open</Button> )}
       {open && (
        <CareerSkillCard
        portfolioOwnerId = {portfolioOwnerId}
        key={skill.id}
        skill={skill}
        setSkill={setSkill}
        isEditable={isEditable}
        setIsEditing = {setIsEditing}
        checkData = {checkData}
        setOpen = {setOpen}
         />
     )}
      </>
     )
}

export default CareerSkills;
