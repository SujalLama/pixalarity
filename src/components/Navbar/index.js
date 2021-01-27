import React, { useState } from "react";
import {
  Nav,
  NavLogo,
  NavIcon,
  NavMenu,
  NavClose,
  NavItem,
  NavBtnWrap,
  NavBtn,
  NavBtn2
} from "./NavbarElements";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY > 760) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbar);

  return (
    <>
      <Nav navbar={navbar}>
        <NavLogo>Pixalarity</NavLogo>
        <NavIcon onClick={() => setIsOpen(!isOpen)}></NavIcon>
        <NavMenu isOpen={isOpen}>
          <NavClose onClick={() => setIsOpen(!isOpen)}></NavClose>
          <NavItem>Home</NavItem>
          <NavItem>Services</NavItem>
          <NavItem>Blogs</NavItem>
          <NavBtnWrap>
            <NavBtn>Log In</NavBtn>
            <NavBtn2>Sign Up</NavBtn2>
          </NavBtnWrap>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
