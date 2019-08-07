import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import { darkAccent, lightGrey } from './colors';

const NavLink = ({ to, text, path }) => {
  const isActive = path === to;
  return (
    <li
      css={css`
        display: inline-block;
        margin: 0.25rem;
      `}
    >
      <Link
        to={to}
        css={css`
          text-decoration: none;
        `}
      >
        <h3
          css={css`
            color: ${isActive ? darkAccent : lightGrey};
            :hover {
              color: ${darkAccent};
            }
          `}
        >
          {text}
        </h3>
      </Link>
    </li>
  );
};

const Navbar = ({ path }) => (
  <nav>
    <ul
      css={css`
        display: inline-block;
      `}
    >
      <NavLink to="/" text="Home" path={path} />
      <NavLink to="/images" text="Images" path={path} />
      {/* <NavLink to="/about" text="About" path={path} />
      <NavLink to="/blog" text="Blog" path={path} />
      <NavLink to="/talks" text="Talks" path={path} /> */}
    </ul>
  </nav>
);

export default Navbar;
