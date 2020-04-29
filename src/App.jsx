import React from "react";
import PageTitle from "./components/PageTitle";

const App = () => {
  // To pass props just add them to the component as following:
  /* <PageTitle propName={valueToPass} /> */
  return <PageTitle fontSize={25} color={"#BADa55"} />;
};

export default App;
