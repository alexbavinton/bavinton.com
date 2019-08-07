jest.mock('../hooks/useSiteMetadata');
jest.mock('../hooks/useBackroundImage');
jest.mock('gatsby-background-image');

import React from 'react';
import renderer from 'react-test-renderer';
import Index from './index';
import useSiteMetadata from '../hooks/useSiteMetadata';
import useBackgroundImage from '../hooks/useBackroundImage';
import BackgroundImage from 'gatsby-background-image';

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
    BackgroundImage.mockReturnValue(<div className="background"></div>);

    const tree = renderer.create(<Index />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
