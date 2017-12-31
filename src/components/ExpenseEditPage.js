import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';

const EditExpensePage = () => {
  return (
    <div>
      <ExpenseForm />
    </div>
  );
};

export default connect()(EditExpensePage);
