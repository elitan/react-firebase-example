import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import LandingPage from './components/LandingPage';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';

import AppBase from  './components/app/AppBase';
import Dashboard from './components/app/Dashboard';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={LandingPage} />

        // auth
        <Route path="login" component={Login} />
        <Route path="logout" component={Logout} />

        // app (logged in)
        <Route path="app" component={AppBase}>
            <IndexRoute component={Dashboard} />
        </Route>
    </Route>
);
