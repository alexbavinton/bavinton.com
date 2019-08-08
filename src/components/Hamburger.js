import React, { useState } from 'react';
import { css } from '@emotion/core';
import {
  darkAccent,
  lightGrey,
  backgroundLight,
  backgroundDark,
  lightAccent,
} from './colors';
import HamburgerIcon from '../assets/menu.svg';
import NavLink from './NavLink';
import links from './links';
import Close from '../assets/close.svg';

const hamburgerButtonStyle = css`
  display: inline-block;
  cursor: pointer;
  height: 1rem;
  background-color: transparent;
  border: 0;
  svg {
    color: ${backgroundDark};
    width: 1rem;
    fill: ${lightGrey};
    :hover {
      fill: ${darkAccent};
    }
  }

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const navStyle = css`
  display: none;
  background-color: ${backgroundLight};
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  position: fixed;
  left: 0px;
  top: 0px;
  padding: 1rem;
  ul {
    margin-top: 3rem;
  }
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const navStyleVisible = css`
  display: block;
`;

const closeButtonStyle = css`
  position: absolute;
  right: 2rem;
  top: 1rem;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  svg {
    height: 2rem;
    fill: ${lightAccent};
    :hover {
      fill: ${darkAccent};
    }
  }
`;

const HamburgerNav = ({ path }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <button onClick={() => setToggle(true)} css={hamburgerButtonStyle}>
        <HamburgerIcon />
      </button>
      <nav
        css={css`
          ${navStyle}
          ${toggle && navStyleVisible}
        `}
      >
        <button css={closeButtonStyle} onClick={() => setToggle(false)}>
          <Close />
        </button>
        <ul>
          <NavLink mobile={true} to={links.home} text="Home" path={path} />
          <NavLink mobile={true} to={links.images} text="Images" path={path} />
          <NavLink mobile={true} to={links.about} text="About" path={path} />
          <NavLink mobile={true} to={links.blog} text="Blog" path={path} />
          <NavLink mobile={true} to={links.talks} text="Talks" path={path} />
        </ul>
      </nav>
    </>
  );
};

export default HamburgerNav;
