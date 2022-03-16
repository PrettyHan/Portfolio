import React, { useState } from "react";
import EducationList from "./EducationList";
import EducationEditForm from "./EducationEditForm";

function EducationEdit({ item, setEducations, isEditable }) {
  //useState로 isEditing 상태를 생성함.
  const [isEditing, setIsEditing] = useState(false);
  return (
    <>
      {isEditing ? (
        <EducationEditForm
           editItem={item}
          setEducations={setEducations}
          setIsEditing={setIsEditing}
        />
      ) : (
        <EducationList
          item={item}
          isEditable={isEditable}
          setIsEditing={setIsEditing}
        />
      )}
    </>
  );
}

export default EducationEdit;
