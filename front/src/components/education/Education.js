import React, { useState } from "react";
import EducationCard from "./EducationCard";
import EducationEditForm from "./EducationEditForm";

function Education({ education, setEducations,isEditable, deleteHandler }) {
  //useState로 isEditing 상태를 생성함.
  const [isEditing, setIsEditing] = useState(false);
  return (
    <>
      {isEditing ? (
        <EducationEditForm
          editEducation={education}
          setEditEducation={setEducations}
          setIsEditing={setIsEditing}
        />
      ) : (
        <EducationCard
        education={education}
          isEditable={isEditable}
          setIsEditing={setIsEditing}
          deleteHandler={deleteHandler}
        />
      )}
    </>
  );
}

export default Education;
