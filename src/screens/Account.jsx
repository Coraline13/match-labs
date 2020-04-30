import React from "react";

import styles from "./Account.module.css";
import { EDIT_CANDIDATE_FIELDS as inputsData } from "../mocks";

import PageTitle from "../components/PageTitle";
import CandidateForm from "../components/CandidateForm";

const Account = () => {
  const onSubmit = (formValues) => {
    console.log(formValues);
  };

  return (
    <>
      <PageTitle>
        <h3>Edit account</h3>
      </PageTitle>
      <CandidateForm inputs={inputsData} handleSubmit={onSubmit} />
    </>
  );
};

export default Account;
