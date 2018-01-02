import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm />);

  expect(wrapper).toMatchSnapshot();
});


test('should render ExpenseForm with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);

  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />);

  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
  const value = 'New test description';
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('description')).toBe(value);
});

test('should set note on textarea change', () => {
  const value = 'New test note';
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find('textarea').at(0).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('note')).toBe(value);
});

test('should set amount if valid input', () => {
  const value = '12.30';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    persist: () => {},
    target: { value }
  });

  expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount if invalid input', () => {
  const value = '12.303';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    persist: () => {},
    target: { value }
  });

  expect(wrapper.state('amount')).toBe('');
});


test('should call onSubmit prop for valid from submition', () => {
  const onSubmitSpy = jest.fn();
  const expense = expenses[0];
  const wrapper = shallow(<ExpenseForm expense={expense} onSubmit={onSubmitSpy} />);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    'amount': expense.amount,
    'createdAt': expense.createdAt,
    'description': expense.description,
    'note': expense.note
  });
});

xtest('should set new date on date change', () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onDateChange')(now);

  expect(wrapper.state.createdAt).toEqual(now);
});

xtest('should set focused on date picker focus', () => {
  const focused = true;
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });

  expect(wrapper.state.calendarFocused).toEqual(focused);
});
