import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpensesList = (props) => (
  <div>
    {
      props.expenses.length === 0
        ? <p>No expenses to show...</p>
        : (
            props.expenses.map((expense) => (<ExpenseListItem {...expense} key={expense.id}/>))
          )
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpensesList);
