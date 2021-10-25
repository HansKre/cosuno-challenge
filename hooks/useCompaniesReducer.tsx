import { useEffect, useReducer } from 'react';
import useSWR from 'swr';
import { initialState, reducer } from 'contexts';
import { ICompany } from 'types';

export default function useCompaniesReducer() {
  const [companiesState, companiesDispatch] = useReducer(reducer, initialState);

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

  return {
    companiesState,
    companiesDispatch,
    error,
    loading: !error && !companies,
  };
}
