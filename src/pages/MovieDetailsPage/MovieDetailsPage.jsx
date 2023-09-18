import { Suspense, useEffect, useMemo, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

import { Additional } from 'components/Additional/Additional';
import { getMoviesDetails } from 'services/api';
import {
  Arrow,
  Back,
  Details,
  List,
  Poster,
  SubTitle,
} from './MovieDetailsPage.styled';
import { Title, Wrapper } from 'components/Global/Global.styled';
import { Loader } from 'components/Loader';

const BASE_URL = 'https://image.tmdb.org/t/p/w500';
const DEFAULT_IMG =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const location = useLocation();

  const [moviesDetail, setMoviesDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function getDetails() {
      try {
        setLoading(true);
        const responce = await getMoviesDetails(id, controller);
        setMoviesDetail(responce.data);
      } catch (e) {
        if (e.code !== 'ERR_CANCELED') {
          toast.error('Something went wrong. Try again.');
        }
      } finally {
        setLoading(false);
      }
    }

    getDetails();

    return () => {
      controller.abort();
    };
  }, [id]);

  const countScore = useMemo(() => {
    return Math.round(moviesDetail.vote_average * 10);
  }, [moviesDetail.vote_average]);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <Wrapper>
        <Back to={location.state ?? '/'}>
          <Arrow /> Go back
        </Back>
        {moviesDetail.length !== 0 && (
          <Details>
            <Poster
              src={
                moviesDetail.poster_path
                  ? `${BASE_URL}${moviesDetail.poster_path}`
                  : DEFAULT_IMG
              }
              alt={`${moviesDetail.title} poster`}
            />
            <div>
              <Title>{`${
                moviesDetail.title
              } (${moviesDetail.release_date?.slice(0, 4)})`}</Title>
              <p>User score: {countScore} %</p>
              <SubTitle>Overview</SubTitle>
              <p>{moviesDetail.overview}</p>
              <SubTitle>Genres</SubTitle>
              <List>
                {moviesDetail.genres?.map(({ name, id }) => (
                  <li key={id}>{name}</li>
                ))}
              </List>
            </div>
          </Details>
        )}
      </Wrapper>
      <Additional backLocation={location.state}></Additional>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
