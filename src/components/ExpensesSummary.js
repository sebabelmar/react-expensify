import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import getExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

export const ExpensesSummary =  (props) => {
  const expensesText = props.expensesCount === 1 ? 'expense' : 'expenses';
  const totalText = numeral(props.expensesTotal / 100).format('$0,0.00');
  return (
    <div>
    {
      props.expensesCount > 0
        && <p>Viewing {props.expensesCount} {expensesText} totalling {totalText}</p>
    }
    </div>
  );
};

const mapStateToProps = (state) => {
  const selectedExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expensesCount: selectedExpenses.length,
    expensesTotal: getExpensesTotal(selectedExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
