import { styled } from 'styled-components';

export const Wrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  gap: 40px; */

  padding-top: 36px;
  padding-bottom: 36px;
  margin: 0 auto;

  @media screen and (max-width: 374px) {
    width: 100%;
  }

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

export const Title = styled.h2`
  margin: 0px auto;

  color: #132b55;
`;

export const List = styled.ul`
  padding-left: 24px;

  list-style-type: circle;
`;
