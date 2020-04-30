import React from "react";

import styles from "./Register.module.css";
import { CREATE_CANDIDATE_FIELDS as inputsData } from "../mocks";

import PageTitle from "../components/PageTitle";
import CandidateForm from "../components/CandidateForm";

const Register = () => {
  const onSubmit = (formValues) => {
    console.log(formValues);
  };

  return (
    <>
      <PageTitle>
        <h3>Register</h3>
      </PageTitle>
      <CandidateForm inputs={inputsData} handleSubmit={onSubmit} />
    </>
  );
};

export default Register;
