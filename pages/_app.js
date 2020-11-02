import Head from 'next/head';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { Global, css } from '@emotion/core';

import customTheme from '@/styles/theme';

const GlobalStyle = ({ children }) => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <CSSReset />
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }

          #__next {
            background: #090c14;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }

          .wrapper > * {
            grid-column: 2;
          }

          .full-bleed {
            grid-column: 1 / 4;
            width: 100%;
          }

          @keyframes glitch1 {
            0% {
              transform: none;
              opacity: 0.5;
            }
            7% {
              transform: skew(-0.3deg, -0.6deg);
              opacity: 0;
            }
            10% {
              transform: none;
              opacity: 0.7;
            }
            27% {
              transform: none;
              opacity: 1;
            }
            30% {
              transform: skew(0.4deg, -0.1deg);
              opacity: 0.8;
            }
            35% {
              transform: none;
              opacity: 1;
            }
            52% {
              transform: none;
              opacity: 1;
            }
            55% {
              transform: skew(-1deg, 0.2deg);
              opacity: 0;
            }
            50% {
              transform: none;
              opacity: 1;
            }
            72% {
              transform: none;
              opacity: 0.2;
            }
            75% {
              transform: skew(0.4deg, 1deg);
              opacity: 0;
            }
            80% {
              transform: none;
              opacity: 0.2;
            }
            100% {
              transform: none;
              opacity: 1;
            }
          }

          @keyframes glitch2 {
            0% {
              transform: none;
              opacity: 0.25;
            }
            7% {
              transform: translate(-2px, -3px);
              opacity: 0.5;
            }
            10% {
              transform: none;
              opacity: 0.25;
            }
            27% {
              transform: none;
              opacity: 0.25;
            }
            30% {
              transform: translate(-5px, -2px);
              opacity: 0.5;
            }
            35% {
              transform: none;
              opacity: 0.25;
            }
            52% {
              transform: none;
              opacity: 0.25;
            }
            55% {
              transform: translate(-5px, -1px);
              opacity: 0.5;
            }
            50% {
              transform: none;
              opacity: 0.25;
            }
            72% {
              transform: none;
              opacity: 0.25;
            }
            75% {
              transform: translate(-2px, -6px);
              opacity: 0.5;
            }
            80% {
              transform: none;
              opacity: 0.25;
            }
            100% {
              transform: none;
              opacity: 0.25;
            }
          }

          @keyframes glitch3 {
            0% {
              transform: none;
              opacity: 0.25;
            }
            7% {
              transform: translate(2px, 3px);
              opacity: 0.5;
            }
            10% {
              transform: none;
              opacity: 0.25;
            }
            27% {
              transform: none;
              opacity: 0.25;
            }
            30% {
              transform: translate(5px, 2px);
              opacity: 0.5;
            }
            35% {
              transform: none;
              opacity: 0.25;
            }
            52% {
              transform: none;
              opacity: 0.25;
            }
            55% {
              transform: translate(5px, 1px);
              opacity: 0.5;
            }
            50% {
              transform: none;
              opacity: 0.25;
            }
            72% {
              transform: none;
              opacity: 0.25;
            }
            75% {
              transform: translate(2px, 6px);
              opacity: 0.5;
            }
            80% {
              transform: none;
              opacity: 0.25;
            }
            100% {
              transform: none;
              opacity: 0.25;
            }
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
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
