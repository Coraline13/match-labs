import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AppContext } from "../Context";
import { useContext } from "react";

const ProtectedRoute = ({ component: Component, ...props }) => {
  // const { user } = useContext(AppContext);
};

export default ProtectedRoute;
