import { Title } from 'components/Global/Global.styled';
import { ListItem } from './CastItem.styled';

const BASE_URL = 'https://image.tmdb.org/t/p/w500';
const DEFAULT_IMG =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

export const CastItem = ({ photo, name, character }) => {
  return (
    <ListItem>
      {<img src={photo ? `${BASE_URL}${photo}` : DEFAULT_IMG} alt={name} />}
      <Title>{name}</Title>
      <p>Character: {character}</p>
    </ListItem>
  );
};
