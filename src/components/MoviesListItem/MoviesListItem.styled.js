import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieLink = styled(Link)`
  text-decoration: none;

  color: inherit;
`;

export const ListItem = styled.li`
  &:hover,
  &:focus {
    color: #a67000;
  }
`;
