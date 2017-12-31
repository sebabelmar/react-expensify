import React from 'react';
import ExpenseForm from './ExpenseForm';

const EditExpensePage = () => {
  return (
    <div>
      <ExpenseForm
        onSubmit={(expense) => {
          console.log(expense);
        }}
      />
    </div>
  );
};

export default EditExpensePage;
