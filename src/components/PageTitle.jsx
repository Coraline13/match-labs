import React from "react";

// make sure to pass props as your argument for the page title arrow function
/* const PageTitle = (props) => */

const PageTitle = ({ fontSize, color }) => {
  // If we passed props as arguments, in here we can access the values by using props.nameOfTheValue
  return <h1 style={{ fontSize: fontSize, color: color }}>Hello from PageTitle</h1>;
};

export default PageTitle;
