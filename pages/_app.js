import Head from 'next/head';

import '../styles/styles.scss';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Martin Burdon</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
