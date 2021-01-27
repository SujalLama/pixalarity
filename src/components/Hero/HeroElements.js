import styled from "styled-components";

export const HeroWrapper = styled.div`
  height: 100vh;
  background: linear-gradient(95deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("https://images.pexels.com/photos/5696873/pexels-photo-5696873.jpeg?auto=compress&cs=tinysrgb&h=650&w=940");

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: #fff;
  text-align: center;
  width: 80%;
`;

export const HeroHead = styled.h2`
  font-weight: 300;
  font-style: italic;
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 1em;
`;

export const HeroP = styled.p`
  margin-bottom: 1em;
`;

export const HeroBtn = styled.button`
  padding: 0.6em 0.8em;
  font-size: 1.1em;
  cursor: pointer;
  background: transparent;
  border: 2px solid #fff;
  color: #fff;
  border-radius: 5px;
  outline: none;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;
