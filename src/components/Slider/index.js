import React from "react";
import {
  SliderWrapper,
  SliderTitle,
  Article,
  ImageWrapper,
  ArticleContent,
  ArticleHead,
  ArticleP,
  ArticleBtn
} from "./SliderElements";
import Carousel from "react-elastic-carousel";

const SliderContent = () => {
  return (
    <>
      <SliderWrapper>
        <SliderTitle>SED ADIPISCING</SliderTitle>

        <Carousel disableArrowsOnEnd={true}>
          <Article>
            <ImageWrapper>
              <img src="https://images.pexels.com/photos/2127468/pexels-photo-2127468.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
            </ImageWrapper>
            <ArticleContent>
              <ArticleHead>Magna libero faucibus adipiscing</ArticleHead>
              <ArticleP>
                Sed egestas, ante et vulputate lorem ipsum dolor sit amet nullam
                pede semper est, vitae luctus metus libero eu augue. Morbi purus
                sed libero, faucibus adipiscing, commodo quis, gravida lorem
                ipsum.
              </ArticleP>
              <ArticleBtn>Learn More</ArticleBtn>
            </ArticleContent>
          </Article>

          <Article>
            <ImageWrapper>
              <img src="https://images.pexels.com/photos/4321879/pexels-photo-4321879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            </ImageWrapper>
            <ArticleContent>
              <ArticleHead>Magna libero faucibus adipiscing</ArticleHead>
              <ArticleP>
                Sed egestas, ante et vulputate lorem ipsum dolor sit amet nullam
                pede semper est, vitae luctus metus libero eu augue. Morbi purus
                sed libero, faucibus adipiscing, commodo quis, gravida lorem
                ipsum.
              </ArticleP>
              <ArticleBtn>Learn More</ArticleBtn>
            </ArticleContent>
          </Article>

          <Article>
            <ImageWrapper>
              <img src="https://images.pexels.com/photos/1575833/pexels-photo-1575833.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            </ImageWrapper>
            <ArticleContent>
              <ArticleHead>Magna libero faucibus adipiscing</ArticleHead>
              <ArticleP>
                Sed egestas, ante et vulputate lorem ipsum dolor sit amet nullam
                pede semper est, vitae luctus metus libero eu augue. Morbi purus
                sed libero, faucibus adipiscing, commodo quis, gravida lorem
                ipsum.
              </ArticleP>
              <ArticleBtn>Learn More</ArticleBtn>
            </ArticleContent>
          </Article>
        </Carousel>
      </SliderWrapper>
    </>
  );
};

export default SliderContent;
