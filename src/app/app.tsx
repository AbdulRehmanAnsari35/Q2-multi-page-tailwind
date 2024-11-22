// src/app/_app.tsx

import { AppProps } from 'next/app';  // Import AppProps from next/app
import Header from '../component/Header';  // Adjust import path
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;



