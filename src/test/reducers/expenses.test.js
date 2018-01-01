import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set expenses state to default values', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });

  expect(state).toEqual([]);
});
