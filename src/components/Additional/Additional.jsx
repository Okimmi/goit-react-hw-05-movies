import {
  Container,
  List,
  ListItem,
  StyledLink,
  Title,
} from './Additional.styled';
import { Wrapper } from 'components/Global/Global.styled';

export const Additional = ({ backLocation, setCoordinate }) => {
  return (
    <Container>
      <Wrapper>
        <Title>Additional information</Title>
        <List>
          <ListItem>
            <StyledLink to="cast" state={backLocation}>
              Cast
            </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="reviews" state={backLocation}>
              Reviews
            </StyledLink>
          </ListItem>
        </List>
      </Wrapper>
    </Container>
  );
};
