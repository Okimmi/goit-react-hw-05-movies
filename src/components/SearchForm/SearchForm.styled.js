import { styled } from 'styled-components';
import { BiSearchAlt } from 'react-icons/bi';

export const Form = styled.form`
  position: relative;

  margin-bottom: 40px;
`;

export const Input = styled.input`
  height: 36px;
  width: 100%;

  padding-left: 36px;

  border-radius: 8px;
  border-color: #132b55;
  border-style: solid;
`;

export const Btn = styled.button`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);

  background-color: transparent;
  border: none;

  cursor: pointer;
`;

export const Search = styled(BiSearchAlt)`
  display: block;

  color: #132b55;

  &:hover,
  &:focus {
    color: #a67000;
  }
`;
