import { useSearchParams } from 'react-router-dom';

import { Wrapper } from 'components/Global/Global.styled';
import { MoviesByQuery } from 'components/MoviesByQuery/MoviesByQuery';
import { SearchForm } from 'components/SearchForm/SearchForm';

const MoviesPage = () => {
  const [searchParams] = useSearchParams();

  return (
    <Wrapper>
      <SearchForm />
      {searchParams.has('query') && <MoviesByQuery />}
    </Wrapper>
  );
};

export default MoviesPage;
