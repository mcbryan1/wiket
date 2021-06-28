import React from "react";
import { Route } from "react-router-dom";
import Navbar from "../Navbar";

const RouteWithNavbar = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest}>
      <Navbar />
      <Component extra={rest} />
    </Route>
  );
};

export default RouteWithNavbar;