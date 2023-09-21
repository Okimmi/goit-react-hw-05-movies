import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getCast } from 'services/api';

import { CastItem } from 'components/CastItem/CastItem';
import { List } from './CastPage.styled';
import { Wrapper } from 'components/Global/Global.styled';
import { Loader } from 'components/Loader';

const CastPage = props => {
  const { id } = useParams();

  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);

  const scrollToAdditional = () => {
    window.scrollTo({ top: 500, behavior: 'smooth' });
  };

  useEffect(() => {
    const controller = new AbortController();

    async function getCastInfo() {
      try {
        setLoading(true);
        const responce = await getCast(id, controller);
        setCast(responce.data.cast);
        scrollToAdditional();
      } catch (e) {
        if (e.code !== 'ERR_CANCELED') {
          toast.error('Something went wrong. Try again.');
        }
      } finally {
        setLoading(false);
      }
    }

    getCastInfo();
    return () => {
      controller.abort();
    };
  }, [id]);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <Wrapper>
      <List>
        {cast.map(({ profile_path, name, character, id }) => (
          <CastItem
            key={id}
            photo={profile_path}
            name={name}
            character={character}
          ></CastItem>
        ))}
      </List>
    </Wrapper>
  );
};

export default CastPage;
