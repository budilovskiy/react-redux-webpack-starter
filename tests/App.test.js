import React from 'react';
import App from '../src/components/App';

describe('<App /> rendering', () => {
  it('should render one <h1>', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.children('h1')).toHaveLength(1);
  });
});
