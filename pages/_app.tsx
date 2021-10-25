import '@styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
