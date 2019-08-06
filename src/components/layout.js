import React from 'react';
import { Global, css } from '@emotion/core';
import { lightGrey, backgroundDark, lightAccent } from './colors';
import Header from './header';

const Layout = ({ children }) => (
  <>
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          margin: 0;
        }

        html,
        body {
          margin: 0;
          color: ${lightGrey};
          font-family: 'Jura';
          font-size: 18px;
          line-height: 1.4;
          background-color: ${backgroundDark};

          > div {
            margin-top: 0;
          }
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          color: ${lightAccent};
          line-height: 1.1;
        }

        li {
          margin-top: 0.25rem;
        }
      `}
    />
    <Header />
    <main>{children}</main>
  </>
);

export default Layout;