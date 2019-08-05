import React from 'react';
import { css } from '@emotion/core';
import { lightGrey, darkAccent } from './colors';

const Icon = ({ Component, href }) => (
  <>
    <a href={href}>
      <Component
        css={css`
          display: inline-block;
          margin-right: 0.25rem;
          height: 100%;
          fill: ${lightGrey};
          :hover {
            fill: ${darkAccent};
          }
        `}
      />
    </a>
  </>
);

export default Icon;
