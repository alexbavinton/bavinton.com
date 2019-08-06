import React from 'react';
import { css } from '@emotion/core';
import { backgroundLight, backgroundDark } from '../components/colors';
import Icon from '../components/Icon';
import Github from '../assets/github.svg';
import Linkedin from '../assets/linkedin.svg';
import Insta from '../assets/instagram.svg';
import links from './links';

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
    left: 4rem;
    background-color: ${backgroundLight}80;
    border-radius: 10px;
    text-shadow: 2px 2px 1px ${backgroundDark};
    font-weight: 400;
    padding: 0.25rem;
    @media only screen and (max-width: 768px) {
      font-size: 125%;
      top: 0;
      left: 1.5rem;
      height: fit-content;
    }
  }
`;

const mobileLinksStyle = css`
  display: none;
  @media only screen and (max-width: 768px) {
    padding: 0.25rem;
    display: block;
    list-style-type: none;
    background-color: ${backgroundLight}80;
    border-radius: 10px;
    position: absolute;
    top: 40vh;
    left: 1.5rem;
    li {
      display: inline-block;
    }
  }
`;

const Hero = ({ children }) => (
  <div css={heroStyles}>
    <div className="copy">
      <h1>Alex Bavinton</h1>
      <h3>Software Engineer</h3>
    </div>
    {/* Placeholder mobile links for MVP */}
    <ul css={mobileLinksStyle}>
      <li>
        <Icon Component={Github} href={links.github} height="4.5rem" />
      </li>
      <li
        css={css`
          margin: 0 2rem 0 2rem;
        `}
      >
        <Icon Component={Linkedin} href={links.linkedin} height="4.5rem" />
      </li>
      <li>
        <Icon Component={Insta} href={links.instagram} height="4.5rem" />
      </li>
    </ul>
    {children}
  </div>
);

export default Hero;
