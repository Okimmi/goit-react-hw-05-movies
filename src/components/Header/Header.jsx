import { HeaderContainer, HeaderWrapper, StyledLink } from './Header.styled';

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
