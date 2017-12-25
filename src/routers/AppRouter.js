import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import ExpenseCreatePage from '../components/ExpenseCreatePage';
import ExpenseEditPage from '../components/ExpenseEditPage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoudPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route path='/' component={ ExpenseDashboardPage } exact={true}/>
        <Route path='/create' component={ ExpenseCreatePage } />
        <Route path='/edit' component={ ExpenseEditPage } />
        <Route path='/help' component={ HelpPage } />
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;
