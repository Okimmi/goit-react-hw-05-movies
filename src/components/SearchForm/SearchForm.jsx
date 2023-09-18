import { useSearchParams } from 'react-router-dom';
import { Btn, Form, Input, Search } from './SearchForm.styled';
import { useEffect, useState } from 'react';

export const SearchForm = () => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.has('query')) {
      setQuery(searchParams.get('query'));
    } else {
      setQuery('');
    }
  }, [searchParams]);

  const onSubmit = e => {
    e.preventDefault();
    setSearchParams({ query });
  };

  return (
    <Form onSubmit={onSubmit}>
      <Input
        type="text"
        name="query"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <Btn>
        <Search size="28"></Search>
      </Btn>
    </Form>
  );
};
