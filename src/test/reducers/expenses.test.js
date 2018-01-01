import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set expenses state to default values', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });

  expect(state).toEqual([]);
});

test('should add expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: {
      id: '4',
      description: 'Car',
      amount: 45000,
      note: '',
      createdAt: moment()
    }
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses.concat(action.expense));
});

test('shoud remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[0].id
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual([expenses[1], expenses[2]]);
});

test('shoud not remove expense when id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: ''
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});

test('shoud edit expense by id', () => {
  const id = expenses[1].id;
  const action = {
    type: 'EDIT_EXPENSE',
    id: id,
    expense: {
      description: 'Edited',
      amount: 1000,
      note: 'Edited note'
    }
  };
  const state = expensesReducer(expenses, action);
  const editedExpense = state.find( (e) => e.id === id);

  expect(editedExpense.description).toEqual(action.expense.description);
  expect(editedExpense.note).toEqual(action.expense.note);
});
