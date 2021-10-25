import Head from 'next/head';
import { Column, H1, Search, Filter, Companies } from 'components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cosuno Coding Challenge</title>
      </Head>
      <Column>
        <H1>Construction Companies</H1>
        <Search />
        <Filter />
        <Companies />
      </Column>
    </>
  );
}
