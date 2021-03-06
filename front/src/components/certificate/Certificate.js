import React, { useState } from "react";
import CertificateCard from "./CertificateCard";
import CertificateEditForm from "./CertificateEditForm";

function Certificate({ certificate, setCertificates, isEditable, deleteHandler }) {
  //useState로 isEditing 상태를 생성
  const [isEditing, setIsEditing] = useState(false);
  
  return (
    <>
      {isEditing ? (
        <CertificateEditForm
          currentCertificate={certificate}
          setCertificates={setCertificates}
          setIsEditing={setIsEditing}
        />
      ) : (
        <CertificateCard
          certificate={certificate}
          isEditable={isEditable}
          setIsEditing={setIsEditing}
          deleteHandler={deleteHandler}
        />
      )}
    </>
  );
}

export default Certificate;
