import React from "react";
import {
  SectionWrapper,
  Asidebar,
  ImageWrapper,
  Tag,
  Sidebar,
  SidebarContent,
  SidebarTitle,
  SidebarP,
  SidebarBtn
} from "./Section2Elements";

export const Section2 = () => {
  return (
    <>
      <SectionWrapper>
        <Asidebar>
          <ImageWrapper>
            <img src="https://images.pexels.com/photos/416726/pexels-photo-416726.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          </ImageWrapper>
          <Tag>
            <h2>INTEGIS VITAE UNON LIBETUE</h2>
          </Tag>
        </Asidebar>

        <Sidebar>
          <SidebarContent>
            <SidebarTitle>
              Morbi purus sed libero faucibus adipiscing
            </SidebarTitle>
            <SidebarP>
              Sed egestas, ante et vulputate lorem ipsum dolor sit amet nullam
              pede semper est, vitae luctus metus libero eu augue. Morbi purus
              sed libero, faucibus adipiscing, gravida lorem ipsum.
            </SidebarP>
            <SidebarBtn>Learn More</SidebarBtn>
          </SidebarContent>
        </Sidebar>
      </SectionWrapper>
    </>
  );
};

export default Section2;
