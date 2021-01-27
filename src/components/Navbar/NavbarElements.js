import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";

export const Nav = styled.nav`
  background: ${({ navbar }) => (navbar ? "#fff" : "transparent")};
  color: ${({ navbar }) => (navbar ? "#000" : "#fff")};
  height: 80px;
  transition: all ease-in 0.1s;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 calc(100vw - 95%);

  position: fixed;
  width: 100vw;
  z-index: 999;
`;
export const NavLogo = styled.h1``;

export const NavIcon = styled(FaBars)`
  display: none;
  cursor: pointer;
  font-size: 1.3em;

  &:hover {
    color: #27cfc9;
  }
  @media screen and (max-width: 1024px) {
    display: block;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;

  align-items: center;

  @media screen and (max-width: 1024px) {
    width: 50%;
    height: 100vh;
    justify-content: center;

    flex-direction: column;
    font-size: 1.5em;
    background: #27cfc9;
    position: absolute;
    top: 0;
    bottom: 0;
    right: ${({ isOpen }) => (isOpen ? 0 : "-800px")};

    transition: right ease-in 0.5s;
  }
`;

export const NavClose = styled(AiFillCloseCircle)`
  display: none;
  @media screen and (max-width: 1024px) {
    display: block;
    position: absolute;
    top: 1.2em;
    right: 2em;

    &:hover {
      color: #ddd;
      cursor: pointer;
    }
  }
`;
export const NavItem = styled.a`
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #27cfc9;
  }

  @media screen and (max-width: 1024px) {
    margin-bottom: 2em;
    &:hover {
      color: #000;
    }
  }
`;
export const NavBtnWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 40%;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    width: 60%;
  }
`;

export const NavBtn = styled.button`
  padding: 0.4em 0.6em;
  font-size: 1.1em;
  border-radius: 4px;
  outline: none;
  border: none;

  cursor: pointer;
  @media screen and (max-width: 1024px) {
    margin-bottom: 1em;
    color: #27cfc9;
  }
`;

export const NavBtn2 = styled(NavBtn)`
  background: none;
  color: #fff;
  border: 2px solid #fff;
`;
