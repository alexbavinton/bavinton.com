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
  background-size: stretch;
  background-position: top 20% center;
  position: relative;
  .copy {
    font-size: 150%;
    position: absolute;
    top: 0;
    height: 100%;
    right: 1;
    background-image: linear-gradient(
      to bottom,
      ${backgroundLight}dd 2rem,
      ${backgroundLight}00
    );
    /* background-color: ${backgroundLight}dd; */
    text-shadow: 2px 2px 1px ${backgroundDark};
    h3 {
      color: ${lightGrey};
    }
  }
`;

const Hero = () => (
  <div css={heroStyles}>
    <div className="copy">
      <h1>Alex Bavinton</h1>
      <h3>Software Engineer</h3>
    </div>
  </div>
);

export default Hero;
