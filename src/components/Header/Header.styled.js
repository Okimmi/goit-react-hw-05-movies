import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Wrapper } from 'components/Global/Global.styled';

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;

  height: 52px;

  background-color: #132b55;
  box-shadow: rgba(10, 50, 120, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

export const StyledLink = styled(NavLink)`
  &:not(:last-child) {
    margin-right: 48px;
  }

  padding: 10px 0 10px 0;

  text-decoration: none;
  text-transform: uppercase;

  color: white;

  &.active,
  &:hover,
  &:focus {
    color: #ffad00;
  }
`;

export const HeaderContainer = styled(Wrapper)`
  padding-top: 0;
  padding-bottom: 0;
`;
