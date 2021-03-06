/* eslint new-cap: 0 */

import React from 'react';
import { Route, Switch, Redirect } from 'react-router';

/* containers */
import { App } from './pages/App';
import { HomePage } from './pages/Home';
import LoginView from './components/LoginView';
import RegisterView from './components/RegisterView';
import ProtectedView from './components/ProtectedView';
import Analytics from './components/Analytics';
import NotFound from './components/NotFound';

import { DetermineAuth } from './components/DetermineAuth';
import { requireAuthentication } from './components/AuthenticatedComponent';
import { requireNoAuthentication } from './components/notAuthenticatedComponent';

export default (
    <Switch>
        <Route path="/main" component={requireAuthentication(ProtectedView)} />
        <Route path="/login" component={requireNoAuthentication(LoginView)} />
        <Route path="/register" component={requireNoAuthentication(RegisterView)} />
        <Route path="/home" component={requireNoAuthentication(HomePage)} />
        <Route path="/analytics" component={requireAuthentication(Analytics)} />
        <Route exact path="/"><Redirect to="/main" /></Route>
        {/* <Route path="*" component={DetermineAuth(NotFound)} /> */}
    </Switch>
);
