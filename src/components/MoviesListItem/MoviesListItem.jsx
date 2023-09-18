import { useLocation } from 'react-router-dom';
import { ListItem, MovieLink } from './MoviesListItem.styled';

export const MoviesListItem = ({ title, id }) => {
  const location = useLocation();
  return (
    <ListItem>
      <MovieLink to={`/movies/${id}`} state={location}>
        {title}
      </MovieLink>
    </ListItem>
  );
};
