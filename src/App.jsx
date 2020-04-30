import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Likes from "./screens/Likes";
import Profile from "./screens/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/profile/:id" component={Profile}></Route>
        <Route path="/" component={Likes}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
