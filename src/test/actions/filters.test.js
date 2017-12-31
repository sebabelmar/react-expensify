import moment from 'moment';
import { setTextFilter,
         sortByDate,
         sortByAmount,
         setStartDate,
         setEndDate
       } from '../../actions/filters';

test('should setup set text filter action object providing a string', () => {
  const action = setTextFilter('test string');

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'test string'
  });
});

test('should setup set text filter action object with default value', () => {
  const action = setTextFilter();

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('should setup sort by date action object', () => {
  const action = sortByDate();

  expect(action).toEqual({ type: 'SORT_BY_DATE' });
});

test('should setup sort by amount action object', () => {
  const action = sortByAmount();

  expect(action).toEqual({ type: 'SORT_BY_AMOUNT' });
});

test('should setup set start date action object', () => {
  const date = moment(0);
  const action = setStartDate(date);

  expect(action).toEqual({
    type: 'SET_START_DATE',
    date: date
  });
});

test('should setup set end date action object', () => {
  const date = moment(0);
  const action = setEndDate(date);

  expect(action).toEqual({
    type: 'SET_END_DATE',
    date: date
  });
});
