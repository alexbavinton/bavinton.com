import React from 'react';
import { Global, css } from '@emotion/core';
import { Helmet } from 'react-helmet';
import { lightGrey, backgroundDark, lightAccent, darkAccent } from './colors';
import Header from './header';
import useSiteMetadata from '../hooks/useSiteMetadata';

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <html lang="en" />
        <title>{title}</title>
        <description>{description}</description>
      </Helmet>
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
            font-family: 'Roboto';
            font-size: 18px;
            line-height: 1.4;
            background-color: ${backgroundDark};

            > div {
              margin-top: 0;
            }
          }

          h1,
          h2,
          h3 {
            color: ${lightAccent};
            line-height: 1.1;
            font-family: 'Jura';
          }

          h2 {
            color: ${darkAccent};
          }

          h3 {
            color: ${lightGrey};
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
};

export default Layout;
