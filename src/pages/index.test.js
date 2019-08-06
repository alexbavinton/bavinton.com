import React from 'react';
import renderer from 'react-test-renderer';
import Index from './index';
import useSiteMetadata from '../hooks/useSiteMetadata';

jest.mock('../hooks/useSiteMetadata');

describe('index', () => {
  it('renders h1', () => {
    useSiteMetadata.mockReturnValue({ title: 'foo', description: 'bar' });
    const tree = renderer.create(<Index />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
