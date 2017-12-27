import {createStore, combineReducers } from 'redux'


const demoState = {
  expenses: [
    {
      id: '243ffsdfs',
      description: 'Paxs school',
      note: 'One more month of knowlagde',
      amount: '50000',
      createdAt: 0
    }
  ],
  filters: {
    text: 'rent',
    sort:   'amount', // amount || date
    startDate: undefined,
    endDate: undefined
  }
}
