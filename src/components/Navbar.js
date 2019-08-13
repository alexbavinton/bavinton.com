import React from 'react';
import { css } from '@emotion/core';
import Hamburger from './Hamburger';
import NavLinks from './NavLinks';
import links from './links';

const Navbar = ({ path }) => (
  <nav>
    <ul
      css={css`
        display: none;
        padding: 0;
        margin: 0;
        @media only screen and (min-width: 768px) {
          display: inline-block;
        }
      `}
    >
      <NavLinks mobile={false} path={path} />
    </ul>
    <Hamburger path={path} />
  </nav>
);

export default Navbar;
