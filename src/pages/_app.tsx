import '../styles/globals.scss';
import { Header } from '../components/header';
import React from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
