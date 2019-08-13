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
import NavLinks from './NavLinks';
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
  display: block;
  background-color: ${backgroundLight};
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  position: fixed;
  overflow-y: auto;
  left: 0px;
  top: 0px;
  padding: 1rem;
  transform: translateX(-100%);
  transition: transform 300ms ease-in-out;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const navStyleVisible = css`
  display: block;
  transform: translateX(0);
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
        <div
          css={css`
            display: ${toggle ? 'block' : 'none'};
          `}
        >
          <button css={closeButtonStyle} onClick={() => setToggle(false)}>
            <Close />
          </button>
          <NavLinks mobile={true} path={path} />
        </div>
      </nav>
    </>
  );
};

export default HamburgerNav;
