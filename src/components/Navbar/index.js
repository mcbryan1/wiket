/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { NavLink, NavBtn, NavBtnLink, Bars } from "./NavbarElements";
import logo from "../../images/svg/wiket-logo.svg";
import "../../App.css";
import { navbarAnimation } from "../../utils/animations";
import { motion } from "framer-motion";

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [nvbar, setNvbar] = useState(false);
  const screenSize = () => {
    setWidth(width);
  };

  useEffect(() => {
    window.addEventListener("resize", screenSize);
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", screenSize);
    };
  }, []);

  // Scrolll Effect
  const changeBackground = ()=>{
    if(window.screenY >= 70){
      setNvbar(true);
    } else{
      setNvbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <motion.div
      variants={width <= 786 ? null : navbarAnimation}
      initial="initial"
      animate="animate"
    >
      <nav className={nvbar ? 'nav active' : 'navbar navbar-expand-lg fixed-top nav'}>
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
              <NavLink to="/benefit" className="navLinks first">
                Benefits
              </NavLink>
              <NavLink to="/profile" className="navLinks">
                Your Profile
              </NavLink>
              <NavLink to="/connections" className="navLinks">
                Connections
              </NavLink>
              <NavLink to="/plans" className="navLinks">
                Plans & Pricing
              </NavLink>
            </div>
            <NavBtn>
              <NavBtnLink to="/signin">Get Started</NavBtnLink>
            </NavBtn>
          </div>
        </div>
      </nav>
    </motion.div>
  );
};

export default Navbar;
