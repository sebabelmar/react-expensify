import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../components/NotFoudPage';

test('should render NotFoundPage correclty', () => {
  const wrapper = shallow(<NotFoundPage />);

  expect(wrapper).toMatchSnapshot();
});
