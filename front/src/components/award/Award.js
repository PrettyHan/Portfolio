import React, { useState } from "react";
import AwardEditForm from "./AwardEditForm";
import AwardCard from "./AwardCard";

function Award({ award, setAwards, isEditable }) {
  //useState로 isEditing 상태를 생성
  const [isEditing, setIsEditing] = useState(false);
  return (
    <>
      {isEditing ? (
        <AwardEditForm
          currentAward={award}
          setAwards={setAwards}
          setIsEditing={setIsEditing}
        />
      ) : (
        <AwardCard
          award={award}
          isEditable={isEditable}
          setIsEditing={setIsEditing}
        />
      )}
    </>
  );
}

export default Award;
