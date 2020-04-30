import React, { useState } from "react";

import styles from "./CandidateForm.module.css";

import Button from "../components/Button";

const CandidateForm = (props) => {
  const changeInputs = (arr) => {
    return arr.reduce((object, { name, value }) => {
      object[name] = value;
      return object;
    }, {});
  }

  const [formValues, setFormValues] = useState(changeInputs(props.inputs));

  const onSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(formValues);
  };

  const onChange = (e) => {
    e.preventDefault();
    setFormValues({
      ...formValues, 
      [e.target.name]: e.target.value
    });
  };

  return (
    <form className={styles.form}>
      {props.inputs.map((i) => (
        <div className={styles.field} key={i.name}>
          <input
            type="text"
            value={formValues[i.name]}
            name={i.name}
            placeholder={i.placeholder}
            // required
            onChange={onChange}
          />
        </div>
      ))}
      <Button
        variant="secondary"
        size="huge"
        action={props.handleSubmit(formValues)}
        children="Submit"
        type="submit"
      />
    </form>
  );
};

export default CandidateForm;
