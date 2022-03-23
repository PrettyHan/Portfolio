import React, { useState, useEffect } from "react";
import CareerSkillCard from "./CareerSkillCard";
import CareerSkillEditForm from "./CareerSkillEditForm";
import * as Api from "../../api";

function CareerSkill({ portfolioOwnerId ,isEditable}) {
  //useState로 isEditing 상태를 생성함.
  const [isEditing, setIsEditing] = useState(false); // 편집버튼 
  
  const [skill, setSkill] = useState([]);
  console.log(isEditable);
   
  useEffect(() => { 
    try{
      Api.get(`skillList` ,portfolioOwnerId).then((res) =>
      setSkill(res.data));
    } 
    catch(error){
      console.log(error);
      if (error.response) {
       const { data } = error.response;
       console.error("data : ", data);
     }
    }
      }, [portfolioOwnerId]);

  return (
    <>
      {isEditing ? (
          <CareerSkillEditForm 
          key={skill.id}
          skill={skill}
          setSkill={setSkill}
          isEditable={isEditable}
          portfolioOwnerId={portfolioOwnerId}
         />
      ) : (
        <CareerSkillCard
        key={skill.id}
        skill={skill}
        setSkill={setSkill}
        isEditable={isEditable}
        setIsEditing = {setIsEditing}
        />
      )}
    </>
  );
}

export default CareerSkill;
