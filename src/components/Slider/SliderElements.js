import styled from "styled-components";

export const SliderWrapper = styled.div`
  background: #388dd6;
  padding: 3em 0;
`;

export const SliderTitle = styled.h2`
  font-weight: 300;
  color: #fff;
  font-style: italic;
  font-size: 2em;
  text-align: center;
  margin-bottom: 1.5em;
`;

export const Article = styled.article`
  width: 75%;
  margin: 0 auto;
  border-radius: 6px;
  margin-bottom: 1em;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 300px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
    height: 200px;
  }
`;

export const ArticleContent = styled.div`
  background: #fff;
  display: flex;
  color: #444;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4em 4em;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;

  @media screen and (max-width: 768px) {
    padding: 2em 1em;
  }
`;

export const ArticleHead = styled.h3`
  font-weight: 300;
  font-size: 1.7em;
  margin-bottom: 1em;
`;

export const ArticleP = styled.p`
  margin-bottom: 1.3em;
`;

export const ArticleBtn = styled.button`
  outline: none;
  border: none;
  padding: 0.6em 0.8em;
  font-size: 1.1em;
  color: #fff;
  background: #388dd6;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: #40bafa;
  }
`;
