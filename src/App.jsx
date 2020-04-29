import React from "react";
import "./static/Base.css";
import Button from "./components/Button";

const App = () => {
  return (
    <>
      <Button variant="secondary" size="huge" children="Huge" />
      <Button variant="primary" size="huge" children="Huge" />
      <Button variant="secondary" size="medium" children="Medium" />
      <Button variant="primary" size="medium" children="Medium" />
      <Button variant="secondary" size="small" children="Small" />
      <Button variant="primary" size="small" children="Small" />
    </>
  );
};

export default App;
