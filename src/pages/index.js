import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';

const index = ({ path }) => (
  <Layout path={path}>
    <Hero />
  </Layout>
);

export default index;
