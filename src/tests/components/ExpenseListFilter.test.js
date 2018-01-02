import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { defaultFilters, altFilters } from '../fixtures/filters';

let setTextFilter;
let setStartDate;
let setEndDate;
let sortByDate;
let sortByAmount;
let wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      setTextFilter={setTextFilter}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      filters={defaultFilters}
     />);
});

test('should render default values ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render alt values ExpenseListFilters correctly', () => {
  wrapper.setProps(() => ({
    filters: altFilters
  }));

  expect(wrapper).toMatchSnapshot();
});

test('should set filter state with text dispatching action', () => {
  wrapper.find('input').prop('onChange')({ target: {value: 'Test Value' }});

  expect(setTextFilter).toHaveBeenLastCalledWith('Test Value');
});

test('should set filter state with sort by amount dispatching action', () => {
  wrapper.find('select').prop('onChange')({ target: {value: 'amount'} });

  expect(sortByAmount).toHaveBeenCalled();
});

test('should set filter state with sort by date dispatching action', () => {
  wrapper.find('select').prop('onChange')({ target: {value: 'date'} });

  expect(sortByDate).toHaveBeenCalled();
});

xtest('should set filter state with new start date dispatching action', () => {
  const newStartDate = moment(0);
  wrapper.find('DateRangePicker').prop('onDatesChange')(newStartDate, undefined);

  expect(setStartDate).toHaveBeenLastCalledWith(newStartDate);
  expect(setEndDate).toHaveBeenLastCalledWith(undefined);
});

xtest('should set state with new end date dispatching action', () => {
  const newEndDate = moment(0).add(3, 'days');
  wrapper.find('DateRangePicker').prop('onDatesChange')(undefined, newEndDate);

  expect(setStartDate).toHaveBeenLastCalledWith(undefined);
  expect(setEndDate).toHaveBeenLastCalledWith(newEndDate);
});

xtest('should set state on calendar focus', () => {
});
