import React from "react";
import {
  HeroWrapper,
  HeroContent,
  HeroHead,
  HeroP,
  HeroBtn
} from "./HeroElements";

export const Hero = () => {
  return (
    <>
      <HeroWrapper>
        <HeroContent>
          <HeroHead>LOREM IPSUM DOLOR SIT AMET</HeroHead>
          <HeroP>
            Dolor sit amet nullam pede semper est, vitae luctus metus libero eu
            augue. Morbi purus sed libero, faucibus adipiscing, commodo.
          </HeroP>
          <HeroBtn>Get Started</HeroBtn>
        </HeroContent>
      </HeroWrapper>
    </>
  );
};

export default Hero;
