import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';

import { MoviesListItem } from 'components/MoviesListItem/MoviesListItem';
import { List, Title, Wrapper } from 'components/Global/Global.styled';
import { getTrendingMovies } from 'services/api';
import { Loader } from 'components/Loader';

const HomePage = () => {
  const [trendingList, setTrendingList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function getList() {
      try {
        setLoading(true);
        const responce = await getTrendingMovies(controller);
        setTrendingList(responce.data.results);
      } catch (e) {
        if (e.code !== 'ERR_CANCELED') {
          toast.error('Something went wrong. Try again.');
        }
      } finally {
        setLoading(false);
      }
    }

    getList();
    return () => {
      controller.abort();
    };
  }, []);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <Wrapper>
      <div>
        <Title>Trending today</Title>
        <List>
          {trendingList.map(({ title, id }) => (
            <MoviesListItem title={title} id={id} key={id}></MoviesListItem>
          ))}
        </List>
      </div>
    </Wrapper>
  );
};

export default HomePage;
