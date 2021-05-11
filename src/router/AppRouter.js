import React, {useEffect} from 'react';
import {
 Router,
  Switch,
  Route,
  HashRouter,
  Redirect,
} from 'react-router-dom';

import { history } from '../_helpers/history';
import {PrivateRoute} from '../_helpers/PrivateRoute';
import {HomePage} from '../component/home';
import {LoginForm} from '../component/login';
import {RegistrationForm} from '../component/registration';

function App() {
  return (
    <div className="">
      {/* <Router history={history}> */}
      <HashRouter>
        <Switch>
          <PrivateRoute exact path="/" component={HomePage} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegistrationForm} />
          <Redirect from="*" to="/login" />
        </Switch>
      </HashRouter>
      {/* </Router> */}
    </div>
  );
}

export default App;
