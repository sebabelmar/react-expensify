import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ExpensesDashboardPage from '../components/ExpensesDashboardPage';
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
        <Route path="/" component={ ExpensesDashboardPage } exact/>
        <Route path="/create" component={ ExpenseCreatePage } />
        <Route path="/edit/:id" component={ ExpenseEditPage } />
        <Route path="/help" component={ HelpPage } />
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
