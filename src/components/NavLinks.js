import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import {
  darkAccent,
  lightGrey,
  backgroundLight,
  backgroundDark,
} from './colors';
import links from './links';

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

const NavlinksStyle = css`
  display: none;
  padding: 0;
  margin: 0;
  @media only screen and (min-width: 768px) {
    display: inline-block;
  }
`;

const NavLinks = ({ path, mobile }) => (
  <ul
    css={css`
      ${!mobile ? NavlinksStyle : 'margin-top: 3rem;'}
    `}
  >
    <NavLink mobile={mobile} to={links.home} text="Home" path={path} />
    {/* <NavLink mobile={mobile} to={links.images} text="Images" path={path} />
    <NavLink mobile={mobile} to={links.about} text="About" path={path} />
    <NavLink mobile={mobile} to={links.blog} text="Blog" path={path} />
    <NavLink mobile={mobile} to={links.talks} text="Talks" path={path} /> */}
  </ul>
);

export default NavLinks;
