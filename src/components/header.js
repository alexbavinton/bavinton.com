import React from 'react';
import styled from '@emotion/styled';
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

const Head = styled.header`
  height: 2.5rem;
  color: ${lightGrey};
  padding: 0.5rem 5vw;
  line-height: 1;
`;

const Header = () => (
  <Head>
    <Icon Component={Github} href={links.github} />
    <Icon Component={Linkedin} href={links.linkedin} />
    <Icon Component={Insta} href={links.instagram} />
  </Head>
);

export default Header;
