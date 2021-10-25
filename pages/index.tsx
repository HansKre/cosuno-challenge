import Head from 'next/head';
import { useEffect, useReducer } from 'react';
import useSWR from 'swr';
import { Column, H1, Controls, Companies } from 'components';
import { CompaniesContextProvider, initialState, reducer } from 'contexts';
import { ICompany } from 'types';

export default function Home() {
  const [companiesState, companiesDispatch] = useReducer(reducer, initialState);
  const contextValues = { state: companiesState, dispatch: companiesDispatch };

  const fetcher = (path: string) => {
    return fetch(path).then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw Error(res.statusText);
    });
  };

  const { data: companies, error } = useSWR<ICompany[], any>(
    '/api/companies',
    fetcher
  );

  useEffect(() => {
    companiesDispatch({ type: 'set', newCompanies: companies });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [companies]);

  return (
    <>
      <Head>
        <title>Cosuno Coding Challenge</title>
      </Head>
      <CompaniesContextProvider value={contextValues}>
        <Column>
          <H1>Construction Companies</H1>
          <Controls />
          <Companies error={error} loading={!error && !companies} />
        </Column>
      </CompaniesContextProvider>
    </>
  );
}
