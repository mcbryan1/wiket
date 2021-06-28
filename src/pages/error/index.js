import React from "react";
import { NavLink as Link } from "react-router-dom";
import "./error.css";
import error from "../../images/png/error.png";

const Error404 = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 order-2 order-md-1">
          <div className="fourOfourText">
            <h1>Oh My...</h1>
            <p>It looks like this page has been lost</p>
          </div>
          <div className="comeHomeBtn">
            <Link to="/" className="comeHomeButton">Back to Home</Link>
          </div>
        </div>
        <div className="col-md-8 order-1 order-md-2">
          <div className="fourOfourImage">
            <img src={error} alt="errorimg" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;
