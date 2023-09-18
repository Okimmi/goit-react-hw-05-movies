import toast from 'react-hot-toast';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { MoviesListItem } from 'components/MoviesListItem/MoviesListItem';
import { List } from 'pages/MovieDetailsPage/MovieDetailsPage.styled';
import { getMoviesByQuery } from 'services/api';
import { Loader } from 'components/Loader';

export const MoviesByQuery = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();

  const controllerRef = useRef();

  useEffect(() => {
    async function getMovies() {
      if (controllerRef.current) {
        controllerRef.current.abort();
      }

      controllerRef.current = new AbortController();

      try {
        setLoading(true);
        const responce = await getMoviesByQuery(
          searchParams.get('query'),
          controllerRef.current
        );
        setMovies(responce.data.results);
      } catch (e) {
        if (e.code !== 'ERR_CANCELED') {
          toast.error('Something went wrong. Try again.');
        }
      } finally {
        setLoading(false);
      }
    }
    getMovies();
    return () => {
      controllerRef.current.abort();
    };
  }, [searchParams]);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <List>
        {movies?.map(({ id, title }) => (
          <MoviesListItem key={id} id={id} title={title}>
            {title}
          </MoviesListItem>
        ))}
      </List>

      {movies.length === 0 && (
        <p>
          Sorry. We can't find movies matching your query "
          {searchParams.get('query')}".
        </p>
      )}
    </div>
  );
};
