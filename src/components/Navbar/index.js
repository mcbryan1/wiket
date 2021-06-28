import React from "react";
import { NavLink, NavBtn, NavBtnLink, Bars } from "./NavbarElements";
import logo from "../../images/svg/wiket-logo.svg";
import "../../App.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top nav">
        <div className="container-fluid">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
          <div className="getStartedMobile">
            <NavBtnLink to="/signin">Get Started</NavBtnLink>
          </div>
          <div
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <Bars />
          </div>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <NavLink to="/benefit">Benefits</NavLink>
              <NavLink to="/profile">Your Profile</NavLink>
              <NavLink to="/connections">Connections</NavLink>
              <NavLink to="/plans">Plans & Pricing</NavLink>
            </div>
            <NavBtn>
              <NavBtnLink to="/signin">Get Started</NavBtnLink>
            </NavBtn>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
