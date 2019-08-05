import React from 'react';
import { css } from '@emotion/core';
import {
  lightGrey,
  backgroundLight,
  lightAccent,
  darkAccent,
  backgroundDark,
} from './colors';
import links from './links';
import Icon from './Icon';
import Github from '../assets/github.svg';
import Linkedin from '../assets/linkedin.svg';
import Insta from '../assets/instagram.svg';

const headerStyle = css`
  height: 1rem;
  color: ${lightGrey};
  line-height: 1;
  padding-right: 2rem;
  margin-top: 0.5rem;
  padding-left: 80vw;

  @media only screen and (min-width: 768px) {
    height: 1.5rem;
  }
  @media only screen and (min-width: 992px) {
    height: 1.75rem;
    padding-left: 85vw;
  }
  @media only screen and (min-width: 1200px) {
    height: 2rem;
    padding-left: 85vw;
  }
`;

const listStyle = css`
  display: flex;
  height: inherit;
  list-style-type: none;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const listItemStyle = css`
  /* margin-right: 0.25rem; */
  flex: auto;
`;

const Header = () => (
  <header css={headerStyle}>
    <ul css={listStyle}>
      <li css={listItemStyle}>
        <Icon Component={Github} href={links.github} />
      </li>
      <li css={listItemStyle}>
        <Icon Component={Linkedin} href={links.linkedin} />
      </li>
      <li css={listItemStyle}>
        <Icon Component={Insta} href={links.instagram} />
      </li>
    </ul>
  </header>
);

export default Header;
