import React from "react";

export const ShowData = ({ formData }) => {
  return (
    <div>
      <h4>
        Name:{formData.firstName}
        {formData.lastName}
      </h4>
      <h3>User Name{formData.username}</h3>
      <p>Email:{formData.email}</p>
      <p>Nationality {formData.nationality}</p>
      <p>Other:{formData.other}</p>
    </div>
  );
};
