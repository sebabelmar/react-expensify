import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensesPage } from '../../components/ExpenseCreatePage';
import expenses from '../fixtures/expenses';

let addExpense;
let history;
let wrapper;

beforeEach(() => {
  addExpense = jest.fn();
  history = {push: jest.fn()};
  wrapper = shallow(<AddExpensesPage addExpense={addExpense} history={history}/>);
});

test('should render AddExpensesPage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle on submit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);

  expect(addExpense).toHaveBeenLastCalledWith(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(wrapper).toMatchSnapshot();
});
