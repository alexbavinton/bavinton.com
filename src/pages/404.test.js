jest.mock('../hooks/useSiteMetadata');

import React from 'react';
import renderer from 'react-test-renderer';
import ErrorPage from './404';
import useSiteMetadata from '../hooks/useSiteMetadata';

describe('404 page', () => {
  it('snapshot', () => {
    useSiteMetadata.mockReturnValue({ title: 'foo', description: 'bar' });
    const tree = renderer.create(<ErrorPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
