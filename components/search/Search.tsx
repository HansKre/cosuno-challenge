import theme from '@styles/theme';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { CompaniesContext } from 'contexts';

const Input = styled.input`
  border-radius: ${theme.borderRadius};
  padding: ${theme.paddingTBLR};
  border: solid;
  border-color: ${theme.palette.grayishViolet};
  border-width: 1px;
`;

export default function Search() {
  const companiesContext = useContext(CompaniesContext);
  const [query, setQuery] = useState('');

  function handleChange() {
    return (e: React.FormEvent<HTMLInputElement>) =>
      setQuery(e.currentTarget.value);
  }

  useEffect(() => {
    companiesContext.dispatch({ type: 'searchFilter', query });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <Input
      type='search'
      name='search'
      id='search'
      placeholder='Company name ...'
      value={query}
      onChange={handleChange()}
    />
  );
}
