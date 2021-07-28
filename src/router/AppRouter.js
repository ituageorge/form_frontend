import React from 'react';
import {
  Switch,
  Route,
  HashRouter,
  Redirect,
} from 'react-router-dom';

import { history } from '../_helpers';
import {PrivateRoute} from '../_helpers';
import {HomePage} from '../component/home';
import {UserManagement} from '../component/home';
import {LoginForm} from '../component/login';
import {RegistrationForm} from '../component/registration';

function App() {
  return (
    <div className="">
      {/* <Router history={history}> */}
      <HashRouter>
        <Switch>
          <PrivateRoute exact  path="/" component={HomePage} />
          {/* <Route exact path="/" component={HomePage} /> */}
          <Route path="/user_management" component={UserManagement} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegistrationForm} />
          <Redirect from="*" to="/register" />
        </Switch>
      </HashRouter>
      {/* </Router> */}
    </div>
  );
}

export default App;
