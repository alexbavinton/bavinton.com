import React from 'react';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import { backgroundLight } from '../components/colors';

const errorStyle = css`
  font-size: 300%;
  background-color: ${backgroundLight};
  width: fit-content;
  height: fit-content;
  border-radius: 10px;
  padding: 0.5rem;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  @media only screen and (max-width: 768px) {
    font-size: 125%;
  }
`;

const errorPage = () => (
  <Layout>
    <div css={errorStyle}>
      <h1>404</h1>
      <h3>Page not found</h3>
    </div>
  </Layout>
);

export default errorPage;
