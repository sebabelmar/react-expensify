import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css'
import './styles/style.scss'


const AddExpensesPage = () => (
  <div>
    This is the add expenses page.
  </div>
);

const ExpenseDashboardPage = () => (
  <div>
    This is the dashboard
  </div>
);

const EditExpensePage = () => (
  <div>
    This is the edit expense page
  </div>
)

const HelpPage = () => (
  <div>
    This is the help page
  </div>
)

const NotFoundPage = () => (
  <div>
    404! <Link to='/'>Go Home!</Link>
  </div>
)

const Header = () => (
  <div>
    <h1>Expensify</h1>
    <NavLink to='/' activeClassName='is-active' exact={true}>Home</NavLink>
    <NavLink to='/create' activeClassName='is-active'>Add</NavLink>
    <NavLink to='/edit' activeClassName='is-active'>Edit</NavLink>
    <NavLink to='/help' activeClassName='is-active'>Help</NavLink>
  </div>
)

const router = (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route path='/' component={ ExpenseDashboardPage } exact={true}/>
        <Route path='/create' component={ AddExpensesPage } />
        <Route path='/edit' component={ EditExpensePage } />
        <Route path='/help' component={ HelpPage } />
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </BrowserRouter>
)

ReactDOM.render(router, document.getElementById('app'));
