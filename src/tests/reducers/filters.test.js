import moment from 'moment';
import filterReducer from '../../reducers/filters';

test('should set filters state to default values', () => {
  const state = filterReducer(undefined, { type: '@@INIT' });

  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set filteres state with custom text value', () => {
  const action = {
    type: 'SET_TEXT_FILTER',
    text: 'Test text'
  };

  const filters = filterReducer(undefined, action);

  expect(filters).toEqual({
    text: 'Test text',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set filteres state to sort by date', () => {
  const action = { type: 'SORT_BY_DATE' };

  const previousState = {
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  };

  const filters = filterReducer(previousState, action);

  expect(filters).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set filteres state to sort by amount', () => {
  const action = { type: 'SORT_BY_AMOUNT' };

  const filters = filterReducer(undefined, action);

  expect(filters).toEqual({
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set filteres state with custom start date', () => {
  const dateNow = moment.now();

  const action = {
    type: 'SET_START_DATE',
    date: dateNow
  };

  const filters = filterReducer(undefined, action);

  expect(filters).toEqual({
    text: '',
    sortBy: 'date',
    startDate: dateNow,
    endDate: moment().endOf('month')
  });
});

test('should set filteres state with custom end date', () => {
  const dateNow = moment.now();

  const action = {
    type: 'SET_END_DATE',
    date: dateNow
  };

  const filters = filterReducer(undefined, action);

  expect(filters).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: dateNow
  });
});
