import React, { useState } from "react";
import EducationList from "./EducationList";
import EducationEditForm from "./EducationEditForm";

function EducationEdit({ item, setData, isEditable , setOpen}) {
  //useState로 isEditing 상태를 생성함.
  const [isEditing, setIsEditing] = useState(false);
  return (
    <>
      {isEditing ? (
        <EducationEditForm
          editItem={item}
          setEditData={setData}
          setIsEditing={setIsEditing}
          setOpen = {setOpen}
        />
      ) : (
        <EducationList
          addItem={item}
          isEditable={isEditable}
          setIsEditing={setIsEditing}
        />
      )}
    </>
  );
}

export default EducationEdit;
