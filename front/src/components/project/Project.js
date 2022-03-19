import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectEditForm from "./ProjectEditForm";

function Project({ project, setProjects , isEditable}) {
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
        />
      )}
    </>
  );
}

export default Project;