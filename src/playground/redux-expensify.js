import {createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// Actions:
// ADD_EXPENSE

const addExpense = (
  {
    description =  '',
    note =  '',
    amount =  0,
    createdAt =  0,
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  },
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id,
});

// EDIT_EXPENSE
const editExpense = (id, expense) => ({
  type: 'EDIT_EXPENSE',
  id,
  expense,
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text,
});

// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE',
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
});

// SET_START_DATE
const setStartDate = (date) => ({
  type: 'SET_START_DATE',
  date,
});

// SET_END_DATE
const setEndDate = (date) => ({
  type: 'SET_END_DATE',
  date,
});

//  Expenses Reducer
const expensesDefaultState = [];

const expenseReducer = (state = expensesDefaultState, action) => {
  switch (action.type) {
  case 'ADD_EXPENSE':
    return [...state, action.expense];
  case 'REMOVE_EXPENSE':
    return state.filter(({ id })=> id !== action.id);
  case 'EDIT_EXPENSE':
    return state.map((expense) => {
      if (expense.id === action.id) {
        return {
          ...expense,
          ...action.expense,
        };
      }
      return expense;
    });
  default:
    return state;
  }
};

// Filter Reducer
const filterDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
};

const filterReducer = (state = filterDefaultState, action) => {
  switch (action.type) {
  case 'SET_TEXT_FILTER':
    return {
      ...state,
      text: action.text,
    };
  case 'SORT_BY_DATE':
    return {
      ...state,
      sortBy: 'date',
    };
  case 'SORT_BY_AMOUNT':
    return {
      ...state,
      sortBy: 'amount',
    };
  case 'SET_START_DATE':
    return {
      ...state,
      startDate: action.date,
    };
  case 'SET_END_DATE':
    return {
      ...state,
      endDate: action.date,
    };
  default:
    return state;
  }
};

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;

    return textMatch && startDateMatch && endDateMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt > b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
    throw new Error('Cannot sort by this parameter');
  });
};

// Store
const store = createStore(combineReducers({
  expenses: expenseReducer,
  filters: filterReducer,
}));

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

//
// Expenses
//

// Add Expense
const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 1000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));

// Remove Expense
store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// Update Expense
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 } ));


//
// Filter
//

// Set text filer
store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());

// Sorts
store.dispatch(sortByDate()); // amount
store.dispatch(sortByAmount()); // date
store.dispatch(setStartDate(-2000));
store.dispatch(setStartDate());
store.dispatch(setEndDate(1500));

// const demoState = {
//   expenses: [
    // {
    //   id: '243ffsdfs',
    //   description: 'Paxs school',
    //   note: 'One more month of knowlagde',
    //   amount: '50000',
    //   createdAt: 0
    // }
//   ],
  // filters: {
  //   text: 'rent',
  //   sortBy:   'amount', // amount || date
  //   startDate: undefined,
  //   endDate: undefined
  // }
// };
