import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import {
  darkAccent,
  lightGrey,
  backgroundLight,
  backgroundDark,
} from './colors';

const NavLinkStylesDesktop = css`
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

const NavlinkStyleMobile = css`
  ${NavLinkStylesDesktop}
  display: block;
  font-size: 200%;
  width: fit-content;
  margin-bottom: 1.5rem;
`;

const NavLink = ({ to, text, path, mobile = false }) => {
  const isActive = path === to;
  return (
    <li
      css={css`
        ${mobile ? NavlinkStyleMobile : NavLinkStylesDesktop}
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

export default NavLink;
