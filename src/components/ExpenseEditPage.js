import React from 'react';

const EditExpensePage = (props) => {
  return (
    <div>
      This is the edit expense {props.match.params.id}
    </div>
  );
};

export default EditExpensePage;
