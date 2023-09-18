import { AuthorName, AuthorText, ListItem } from './Review.styled';

export const Review = ({ author, content }) => {
  return (
    <ListItem>
      <AuthorText>
        Author: <AuthorName>{author}</AuthorName>
      </AuthorText>
      <p>{content}</p>
    </ListItem>
  );
};
