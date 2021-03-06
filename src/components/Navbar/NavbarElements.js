import { CgMenuRight } from 'react-icons/cg';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';



export const NavLink = styled(Link)`
  color: #004e4c;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  font-family: 'FaibleBold';
  &.active {
    color: #faa834;
  }
  &:hover {
    transition: all 0.3s ease-in-out;
    color: #faa834;
  }

`;

export const Bars = styled(CgMenuRight)`
  display: none;
  color: #004e4c !important;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 2rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;


  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 5px;
  background: #faa834;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  font-family: "FaibleBold";
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transition: all 0.5s ease-in-out;
  text-decoration: none;
 
  
  &:hover {

    transition: all 0.3s ease-in-out;
    background: #004e4c;
    color: #fff;

  }

  @media screen and (max-width: 380px) {
    padding: 10px 12px;
  }
`;