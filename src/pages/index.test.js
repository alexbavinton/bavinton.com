jest.mock('../hooks/useSiteMetadata');
jest.mock('../hooks/useBackroundImage');

import React from 'react';
import renderer from 'react-test-renderer';
import Index from './index';
import useSiteMetadata from '../hooks/useSiteMetadata';
import useBackgroundImage from '../hooks/useBackroundImage';

const fluidMock = {
  aspectRatio: 1,
  src: './foo',
  srcSet: './foo',
  sizes: '100',
};

describe('index', () => {
  it('renders landing page', () => {
    useSiteMetadata.mockReturnValue({ title: 'foo', description: 'bar' });
    useBackgroundImage.mockReturnValue({
      image: { sharp: { fluid: fluidMock } },
    });

    const tree = renderer.create(<Index />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
