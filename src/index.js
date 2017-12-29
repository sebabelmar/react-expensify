import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getvisibilityItems from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const store = configureStore();

// addExpense
store.dispatch(addExpense({
  description: 'water bill',
  amount: 50,
  createdAt: 1000
}));

// addExpense
store.dispatch(addExpense({
  description: 'gas bill',
  amount: 30,
  createdAt: 1000
}));

// setTextFilter - bill -> water
store.dispatch(setTextFilter('bill'));

// getvisibilityItems
const state = store.getState();
console.log(getvisibilityItems(state.expenses, state.filters));

ReactDOM.render(<AppRouter />, document.getElementById('app'));
