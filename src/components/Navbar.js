import React from 'react';
import { css } from '@emotion/core';
import Hamburger from './Hamburger';
import NavLink from './NavLink';

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
      <NavLink to="/" text="Home" path={path} />
      <NavLink to="/images" text="Images" path={path} />
      <NavLink to="/about" text="About" path={path} />
      <NavLink to="/blog" text="Blog" path={path} />
      <NavLink to="/talks" text="Talks" path={path} />
    </ul>
    <Hamburger />
  </nav>
);

export default Navbar;
