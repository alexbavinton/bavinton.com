import React from 'react';
import { css } from '@emotion/core';
import { lightGrey, darkAccent } from './colors';

const Icon = ({ Component, href, height = '100%' }) => (
  <>
    <a href={href}>
      <Component
        css={css`
          display: inline-block;
          margin-right: 0.25rem;
          height: ${height};
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
