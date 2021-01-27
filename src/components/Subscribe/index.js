import React from "react";
import {
  Wrapper,
  Content,
  ContentHead,
  ContentP,
  FormWrapper,
  EmailInput,
  SubBtn
} from "./SubscribeElements";

const SubscribeContent = () => {
  return (
    <>
      <Wrapper>
        <Content>
          <ContentHead>TEMPUS AMET</ContentHead>
          <ContentP>
            Sed egestas, ante et vulputate lorem ipsum dolor sit amet nullam
            pede semper est, vitae luctus metus libero eu augue. Morbi purus sed
            libero, faucibus adipiscing, commodo quis, gravida lorem ipsum.
          </ContentP>
          <FormWrapper>
            <EmailInput placeholder="Your email address" />
            <SubBtn>Subscribe</SubBtn>
          </FormWrapper>
        </Content>
      </Wrapper>
    </>
  );
};

export default SubscribeContent;
