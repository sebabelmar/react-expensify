import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';


test('should return 0 if no expenses', () => {
  const total = getExpensesTotal([]);

  expect(total).toBe(0);
});

test('should return expense amount if only one expense', () => {
  const total = getExpensesTotal([expenses[0]]);

  expect(total).toBe(expenses[0].amount);
});

test('should return sum amount if multiple expenses', () => {
  const total = getExpensesTotal(expenses);
  const totalAmount = expenses
                        .map((expense) => expense.amount)
                        .reduce((acc, curr) => acc + curr);

  expect(total).toBe(totalAmount);
});
