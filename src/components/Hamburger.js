import React, { useState } from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import {
  darkAccent,
  lightGrey,
  backgroundLight,
  backgroundDark,
} from './colors';
import Hamburger from '../assets/hamburger.svg';

const hamburgerStyle = css`
  display: inline-block;
  cursor: pointer;
  height: 4em;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const HamburgerNav = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      {!toggle && (
        <button onClick={() => setToggle(true)} css={hamburgerStyle}>
          <Hamburger
            css={css`
              fill: ${lightGrey};
              :hover {
                fill: ${darkAccent};
              }
            `}
          />
        </button>
      )}
    </>
  );
};

export default HamburgerNav;
