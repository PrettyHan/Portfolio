import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectEditForm from "./ProjectEditForm";

function Project({ project, setProjects , isEditable, deleteHandler }) {
  const [isEditing, setIsEditing] = useState(false);
  
  return (
    <>
      {isEditing ? (
        <ProjectEditForm
          editProject={project}
          setEditProject={setProjects}
          setIsEditing={setIsEditing}
        />
      ) : (
        <ProjectCard
          project={project}
          isEditable={isEditable}
          setIsEditing={setIsEditing}
          setProjects={setProjects}
          deleteHandler={deleteHandler}
        />
      )}
    </>
  );
}

export default Project;
