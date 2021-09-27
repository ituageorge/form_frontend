import React from 'react';
import { Switch, Route, HashRouter, Redirect } from 'react-router-dom';

import { history } from '../_helpers';
import { PrivateRoute } from '../_helpers';
import { HomePage } from '../component/home';
import { UserManagement } from '../component/home';
import { LoginForm } from '../component/login';
import { RegistrationForm } from '../component/registration';
import { RecoverPassword } from '../component/forgotPassword';
import { UpdatePassword } from '../component/forgotPassword';

function App() {
  let userId = '';
  let token = '';
  return (
    <div className="">
      {/* <Router history={history}> */}
      <HashRouter>
        <Switch>
          <PrivateRoute exact path="/" component={HomePage} />
          {/* <Route exact path="/" component={HomePage} /> */}
          <Route path="/user_management" component={UserManagement} />
          <Route path="/login" component={LoginForm} />
          <Route path="/recover/password" component={RecoverPassword} />

          <Route
            path={`/reset-password-link/${userId}/${token}`}
            component={UpdatePassword}
          />
          <Route path="/register" component={RegistrationForm} />
          <Redirect from="*" to="/register" />
        </Switch>
      </HashRouter>
      {/* </Router> */}
    </div>
  );
}

export default App;
