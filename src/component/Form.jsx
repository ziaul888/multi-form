import React, { useState } from "react";
import { SignUpForm } from "./SignUpForm";
import { UserInfo } from "./UserForm";
import { OtherInfo } from "./OtherInfo";
import { ShowData } from "./ShowData";

export const Form = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    other: "",
  });
  const FormTitles = ["Sign Up", "User Info", "Other Info"];
  const goNext = () => {
    setPage((currPage) => currPage + 1);
  };
  const PageShow = () => {
    if (page === 0) {
      return <SignUpForm formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <UserInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <ShowData formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="form">
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageShow()}</div>
        <div className="footer">
          <button onClick={page === 3 ? alert("Successfully Submit") : goNext}>
            {page === 3 ? "Successfully Submit " : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};
