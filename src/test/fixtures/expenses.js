import moment from 'moment';

export default [{
  id: '1',
  description: 'Coffee',
  amount: 400,
  note: '',
  createdAt: 0
}, {
  id: '2',
  description: 'Rent',
  amount: 450000,
  note: '',
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'Gas',
  amount: 5000,
  note: '',
  createdAt: moment(0).add(4, 'days').valueOf()
}];
