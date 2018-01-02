import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

// Refactor to use mapDispatchToProps so we can create spies and pass them as mapStateToProps
// Dispachers should be call with the expected parameters
// state should change filters {...}

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  }
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  }
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  }
  onTextChange = (e)=>{
    this.props.setTextFilter(e.target.value);
  }
  onSortChange = (e) => {
    e.target.value === 'amount'
    ? this.props.sortByAmount()
    : this.props.sortByDate();
  }
  render() {
    return (
      <div>
      <input
        type="text"
        value={this.props.filters.text}
        onChange={this.onTextChange}
      />
      <select
        value={this.props.filters.sortBy}
        onChange={this.onSortChange}>
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
      <DateRangePicker
        startDate={this.props.filters.startDate}
        endDate={this.props.filters.endDate}
        onDatesChange={this.onDatesChange}
        focusedInput={this.state.calendarFocused}
        onFocusChange={this.onFocusChange}
        startDateId="id"
        endDateId="id"
        showClearDates
        numberOfMonths={1}
        isOutsideRange={() => false}
      />
      </div>
    );
  }
}

const mapDispatchToPropsTo = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount())
});

const mapStateToProps = (state) => ({
  filters: state.filters
});

export default connect(mapStateToProps, mapDispatchToPropsTo)(ExpenseListFilters);
