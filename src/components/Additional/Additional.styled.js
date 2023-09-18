import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const Container = styled.div`
  background-color: #233e88;
`;

export const Title = styled.div`
  margin-bottom: 12px;

  text-transform: uppercase;
  color: #ffd273;
`;

export const List = styled.ul`
  padding-left: 16px;
  list-style-type: disclosure-closed;
  color: white;
`;

export const ListItem = styled.li`
  &:hover,
  &:focus {
    color: #ffad00;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;

  &.active {
    text-decoration: underline;
  }
`;
