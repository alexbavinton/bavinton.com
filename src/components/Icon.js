import React from 'react';
import { css } from '@emotion/core';
import { lightGrey, darkAccent } from './colors';

const Icon = ({ Component, href }) => (
  <>
    <a href={href}>
      <Component
        css={css`
          height: 100%;
          fill: ${lightGrey};
          margin: 0.5rem;
          :hover {
            fill: ${darkAccent};
          }
        `}
      />
    </a>
  </>
);

export default Icon;
