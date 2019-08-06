import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { css } from '@emotion/core';
import {
  backgroundLight,
  darkAccent,
  backgroundDark,
  lightGrey,
} from '../components/colors';

const heroStyles = css`
  height: 90vh;
  background-image: url('images/backgroundHero.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top 20% center;
  position: relative;
  .copy {
    font-size: 175%;
    position: absolute;
    bottom: 4rem;
    /* height: 100%; */
    left: 4rem;
    /* background-image: linear-gradient(
      to bottom,
      ${backgroundLight}dd 2rem,
      ${backgroundLight}00
    ); */
    background-color: ${backgroundLight}dd;
    border-radius: 10px;
    text-shadow: 2px 2px 1px ${backgroundDark};
    font-weight: 400;
  }
`;

const Hero = ({ children }) => (
  <div css={heroStyles}>
    <div className="copy">
      <h1>Alex Bavinton</h1>
      <h3>Software Engineer</h3>
      {children}
    </div>
  </div>
);

export default Hero;
