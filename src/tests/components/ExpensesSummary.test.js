import React from 'react';

import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';


test('should render ExpensesSummary correctly when single expnese', () => {
  const expensesCount = 1;
  const expensesTotal = 450;
  const wrapper = shallow(<ExpensesSummary
                            expensesCount={expensesCount}
                            expensesTotal={expensesTotal}
                            />);

  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary correctly when no expense', () => {
  const expensesCount = 0;
  const expensesTotal = 0;
  const wrapper = shallow(<ExpensesSummary
                            expensesCount={expensesCount}
                            expensesTotal={expensesTotal}
                            />);

  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary correctly when multiple expenses', () => {
  const expensesCount = 3;
  const expensesTotal = 467.90;
  const wrapper = shallow(<ExpensesSummary
                            expensesCount={expensesCount}
                            expensesTotal={expensesTotal}
                            />);

  expect(wrapper).toMatchSnapshot();
});
