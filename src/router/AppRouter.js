import React, { Suspense, lazy } from 'react';
import { Switch, Route, HashRouter, Redirect } from 'react-router-dom';

// import { history, PrivateRoute } from '../_helpers';

// const OtherComponent = React.lazy(() => import('./OtherComponent'));

// import { PrivateRoute } from '../_helpers';
const { PrivateRoute } = lazy(() => import('../_helpers'));

// import { HomePage } from '../component/home';
const {HomePage} = lazy(() => import('../component/home'));

// import { UserManagement } from '../component/home';
const {UserManagement} = lazy(() => import('../component/home'));

// import { LoginForm } from '../component/login';
const {LoginForm} = lazy(() => import('../component/login'));

// import { RegistrationForm } from '../component/registration';
const {RegistrationForm} = lazy(() => import('../component/registration'));

// import { RecoverPassword } from '../component/forgotPassword';
const {RecoverPassword} = lazy(() => import('../component/forgotPassword'));

// import { UpdatePassword } from '../component/forgotPassword';
const {UpdatePassword} = lazy(() => import('../component/forgotPassword'));

function App() {
  let userId = '';
  let token = '';
  return (
    
    <div className=""
    //  style={{ backgroundImage: "url(dist\sincerely-media-DgQf1dUKUTM-unsplash.jpg)" }}
      >
      {/* <Router history={history}> */}
      <HashRouter>
      <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
      </HashRouter>
      {/* </Router> */}
    </div>
  );
}

export default App;
