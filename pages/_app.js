import Head from 'next/head';
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';
import { Global, css } from '@emotion/core';

import customTheme from '@/styles/theme';

const GlobalStyle = ({ children }) => {
  return (
    <>
      <Head>
        <title>Martin Burdon</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <CSSReset />
      <Global
        styles={css`
          :root {
            --gray-50: #f9fafb;
            --gray-100: #f1f1f4;
            --gray-200: #e2e4e9;
            --gray-300: #d4d6de;
            --gray-400: #9aa0b1;
            --gray-500: #636b83;
            --gray-600: #2f3850;
            --gray-700: #161c2c;
            --gray-800: #111622;
            --gray-900: #090c14;
            --teal-50: #dcfff6;
            --teal-100: #b0ffe3;
            --teal-200: #80ffce;
            --teal-300: #50ffc6;
            --teal-400: #29ffc4;
            --teal-500: #19e6b6;
            --teal-600: #0bb39a;
            --teal-700: #008079;
            --teal-800: #004d4d;
            --teal-900: #001b1;
            --blue-50: #ede4ff;
            --blue-100: #c4b2ff;
            --blue-200: #9980ff;
            --blue-300: #6a4dff;
            --blue-400: #4f1bfe;
            --blue-500: #4601e5;
            --blue-600: #4100b3;
            --blue-700: #360081;
            --blue-800: #25004f;
            --blue-900: #100020;
          }

          html {
            color: var(--gray-50);
            scroll-behavior: smooth;
          }

          #__next {
            background: var(--gray-900);
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }

          ::selection {
            background-color: var(--teal-400);
            color: var(--teal-800);
          }
        `}
      />
      {children}
    </>
  );
};

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={customTheme}>
      <ColorModeProvider value="dark">
        <GlobalStyle>
          <Component {...pageProps} />
        </GlobalStyle>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
