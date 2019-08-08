import React, { useState } from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import {
  darkAccent,
  lightGrey,
  backgroundLight,
  backgroundDark,
} from './colors';
import HamburgerIcon from '../assets/menu.svg';

const hamburgerButtonStyle = css`
  display: inline-block;
  cursor: pointer;
  height: 1rem;
  background-color: ${backgroundDark};
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
  background-color: ${backgroundLight};
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  position: fixed;
  left: 0px;
  top: 0px;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const HamburgerNav = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      {!toggle && (
        <button onClick={() => setToggle(true)} css={hamburgerButtonStyle}>
          <HamburgerIcon />
        </button>
      )}
      <nav css={navStyle}></nav>
    </>
  );
};

export default HamburgerNav;
