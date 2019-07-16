import React from 'react';
import renderer from 'react-test-renderer';
import Index from './index';

describe('index', () => {
  it('renders h1', () => {
    const tree = renderer.create(<Index />).toJSON();
    expect(tree.type).toBe('h1');
  });
});
