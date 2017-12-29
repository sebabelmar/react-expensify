import React from 'react';
import { connect } from 'react-redux';

const ExpensesList = (props) => (
  <div>
    <h1>Expenses List</h1>
    <p>{ props.expenses.length }</p>
    <p>{ props.filters.text }</p>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpensesList);
