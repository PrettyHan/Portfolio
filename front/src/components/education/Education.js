import React, { useState } from "react";
import EducationList from "./EducationCard";
import EducationEditForm from "./EducationEditForm";

function Education({ education, setEducations,isEditable}) {
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
        <EducationList
        education={education}
          isEditable={isEditable}
          setIsEditing={setIsEditing}
        />
      )}
    </>
  );
}

export default Education;