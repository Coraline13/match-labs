import React from "react";
import Likes from "./screens/Likes";
import { labs, technologies } from "./mocks";

const App = () => {
  return (
    <>
      <h3>Hellowz</h3>
      <Likes labs={labs} technologies={technologies} />
    </>
  );
};

export default App;
