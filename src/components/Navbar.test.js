import React from 'react';
import Navbar from './Navbar';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow (<Navbar />);
  expect(wrapper).toExist;
});

