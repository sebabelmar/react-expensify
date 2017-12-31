import moment from 'moment';
import selectExpenses from '../../selectors/expenses';

const expenses = [{
  id: '1',
  description: 'Coffee',
  amount: 400,
  note: '',
  createdAt: 0
}, {
  id: '2',
  description: 'Rent',
  amount: 450000,
  note: '',
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'Gas',
  amount: 5000,
  note: '',
  createdAt: moment(0).add(4, 'days').valueOf()
}];

test('should filter by text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const selectedExpenses = selectExpenses(expenses, filters);

  expect(selectedExpenses).toEqual([expenses[1], expenses[0]]);
});

test('should sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };

  const selectedExpenses = selectExpenses(expenses, filters);

  expect(selectedExpenses).toEqual([expenses[1], expenses[0], expenses[2]]);
});

test('should sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };

  const selectedExpenses = selectExpenses(expenses, filters);

  expect(selectedExpenses).toEqual([expenses[1], expenses[2], expenses[0]]);
});

test('should filter by start date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  };

  const selectedExpenses = selectExpenses(expenses, filters);

  expect(selectedExpenses).toEqual([expenses[0], expenses[2]]);
});

test('should filter by end date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0)
  };

  const selectedExpenses = selectExpenses(expenses, filters);

  expect(selectedExpenses).toEqual([expenses[1], expenses[0]]);
});
