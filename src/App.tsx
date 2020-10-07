import * as React from 'react';
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import Signup from './components/signup';
import Login from './components/login';
import Dropdown from './components/dropdown';

export default () => (
    <Router>
        <Route exact path='/signUp' component={Signup} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={Dropdown} />

    </Router>
);
