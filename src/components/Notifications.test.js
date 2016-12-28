import React from 'react';
import Notifications from './Notifications';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow (<Notifications />);
  expect(wrapper).toExist;
});
