import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import {
  darkAccent,
  lightGrey,
  backgroundLight,
  backgroundDark,
} from './colors';

const NavLinkStyles = css`
  display: inline-block;
  margin: 0.25rem;
  border-radius: 10px;
  padding: 0.25rem;
  font-size: 0.8rem;
  @media only screen and (min-width: 992px) {
    font-size: 1rem;
  }
  :hover {
    background-color: ${backgroundLight};
    h3 {
      color: ${darkAccent};
      text-shadow: 2px 2px 1px ${backgroundDark};
    }
  }
`;

const NavLink = ({ to, text, path }) => {
  const isActive = path === to;
  return (
    <li
      css={css`
        ${NavLinkStyles}
        h3 {
          color: ${isActive ? darkAccent : lightGrey};
        }
      `}
    >
      <Link
        to={to}
        css={css`
          text-decoration: none;
        `}
      >
        <h3>{text}</h3>
      </Link>
    </li>
  );
};

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
  </nav>
);

export default Navbar;
