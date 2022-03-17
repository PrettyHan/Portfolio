import React, { useState } from "react";
import ProjectList from "./ProjectList";
import ProjectEditForm from "./ProjectEditForm";

function ProjectEdit({ item, setData, isEditable , setOpen}) {
  //useState로 isEditing 상태를 생성함.
  const [isEditing, setIsEditing] = useState(false);
  return (
    <>
      {isEditing ? (
        <ProjectEditForm
          editItem={item}
          setEditData={setData}
          setIsEditing={setIsEditing}
          setOpen = {setOpen}
        />
      ) : (
        <ProjectList
          addItem={item}
          isEditable={isEditable}
          setIsEditing={setIsEditing}
        />
      )}
    </>
  );
}

export default ProjectEdit;
