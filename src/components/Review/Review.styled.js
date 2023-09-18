import { styled } from 'styled-components';

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 36px;
  }

  padding: 8px;

  box-shadow: rgba(166, 112, 0, 0.2) 0px 0px 5px 0px,
    rgba(166, 112, 0, 0.4) 0px 0px 1px 0px;
`;

export const AuthorText = styled.p`
  margin-bottom: 16px;

  font-size: 20px;
  font-weight: 600;
`;

export const AuthorName = styled.span`
  color: #132b55;
`;
