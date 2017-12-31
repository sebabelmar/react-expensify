import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import 'normalize.css/normalize.css';
import './styles/style.scss';


// REDUX examples....
const store = configureStore();

// addExpense
store.dispatch(addExpense({
  description: 'water bill',
  amount: 5000,
  createdAt: 1000
}));

store.dispatch(addExpense({
  description: 'gas bill',
  amount: 3000,
  createdAt: 500
}));

store.dispatch(addExpense({
  description: 'fuel bill',
  amount: 1000,
  createdAt: 250
}));

// REDUX examples....

const jsx = (
  <Provider store={store} >
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
