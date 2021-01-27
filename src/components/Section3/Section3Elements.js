import styled from "styled-components";

export const SectionWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;

  @media screen and (max-width: 768px) {
    height: 100vh;
    display: block;
  }
`;

export const Asidebar = styled.aside`
  width: 100vw;
  display: flex;

  @media screen and (max-width: 768px) {
    position: relative;
    width: 100%;
  }
`;

export const ImageWrapper = styled.div`
  width: 40%;
  order: 2;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* object-position: center; */
  }
  @media screen and (max-width: 768px) {
    width: 100vw;
    height: 400px;
  }
`;

export const Tag = styled.div`
  width: 60%;
  order: 1;
  background: #7445db;
  color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10%;

  h2 {
    font-weight: 300;
    font-style: italic;
    font-size: 3em;
    width: 200px;
  }

  @media screen and (max-width: 768px) {
    height: 80px;
    position: absolute;
    width: 100%;
    bottom: 0px;
    justify-content: center;
    padding-left: 0%;
    text-align: center;

    h2 {
      font-size: 2em;
      width: 100%;
    }
  }
`;

export const Sidebar = styled.aside`
  position: absolute;
  background: #fff;
  width: 35%;
  top: 40%;
  left: 40%;
  border-radius: 8px;

  @media screen and (max-width: 768px) {
    position: static;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const SidebarContent = styled.div`
  padding: 3em 0;
  width: 90%;
  margin: 0 auto;
  color: #999;
`;

export const SidebarTitle = styled.h2`
  font-weight: 300;
  font-size: 2em;
  margin-bottom: 1em;
`;

export const SidebarP = styled.p`
  margin-bottom: 1em;
`;

export const SidebarBtn = styled.button`
  background: #7445db;
  outline: none;
  border: none;
  padding: 0.8em 0.8em;
  border-radius: 5px;
  font-size: 1.1em;
  color: #fff;
  cursor: pointer;

  &:hover {
    background: #26c9c4;
  }
`;
