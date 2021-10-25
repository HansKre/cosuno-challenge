import Head from 'next/head';
import { Column, H1, Controls, Companies } from 'components';
import { CompaniesContextProvider } from 'contexts';
import useCompaniesReducer from 'hooks/useCompaniesReducer';

export default function Home() {
  const { companiesState, companiesDispatch, error, loading } =
    useCompaniesReducer();
  const contextValues = { state: companiesState, dispatch: companiesDispatch };

  return (
    <>
      <Head>
        <title>Cosuno Coding Challenge</title>
      </Head>
      <CompaniesContextProvider value={contextValues}>
        <Column>
          <H1>Construction Companies</H1>
          <Controls />
          <Companies error={error} loading={loading} />
        </Column>
      </CompaniesContextProvider>
    </>
  );
}
