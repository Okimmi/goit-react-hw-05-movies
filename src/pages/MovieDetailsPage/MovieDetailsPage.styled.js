import { styled } from 'styled-components';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export const Details = styled.div`
  display: flex;
  gap: 24px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Poster = styled.img`
  max-width: 350px;
  height: 100%;
`;

export const SubTitle = styled.h3`
  margin-top: 24px;

  color: #132b55;
`;

export const List = styled.ul`
  padding-left: 24px;
  list-style-type: disc;
`;

export const Back = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;

  width: fit-content;

  margin-bottom: 16px;
  padding: 4px 12px;

  text-decoration: none;
  color: #132b55;
  background-color: #ffd273;
  border: 1px solid #ffad00;
  border-radius: 8px;

  cursor: pointer;

  &:hover,
  &:focus {
    color: #ffad00;
    background-color: #132b55;
    border-color: #132b55;
  }
`;

export const Arrow = styled(BiArrowBack)`
  display: block;
`;
