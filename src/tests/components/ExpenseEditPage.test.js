// Imports
// Test rendering
// should handle editExpense
// Should hablde remove

import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/ExpenseEditPage';
import expenses from '../fixtures/expenses';

let expense;
let removeExpense;
let editExpense;
let history;
let wrapper;

beforeEach(() => {
  expense = expenses[1];
  removeExpense = jest.fn();
  editExpense = jest.fn();
  history = {push: jest.fn()};
  wrapper = shallow(<EditExpensePage
                            history={history}
                            expense={expense}
                            removeExpense={removeExpense}
                            editExpense={editExpense} />);
});

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle remove expense by id', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeExpense).toHaveBeenLastCalledWith({ id: expense.id });
});

test('shoud handle edit expense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expense);
  expect(editExpense).toHaveBeenLastCalledWith(expense.id, expense);
});
