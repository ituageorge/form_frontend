import React, { Suspense, lazy } from 'react';
import { Switch, Route, HashRouter, Redirect } from 'react-router-dom';
import './styles.css';

const PrivateRoute = lazy(() => import('../_helpers/PrivateRoute'))
// import { PrivateRoute } from '../_helpers';

const HomePage = lazy(() => import('../component/home/home'))
// import { HomePage } from '../component/home';

const UserManagement = lazy(() => import('../component/home/usersManagement'))
// import { UserManagement } from '../component/home';

const LoginForm = lazy(() => import('../component/login/login'))
// import { LoginForm } from '../component/login';

const RegistrationForm = lazy(() => import('../component/registration/registration'))
// import { RegistrationForm } from '../component/registration';

const RecoverPassword = lazy(() => import('../component/forgotPassword/recoverPassword'))
// import { RecoverPassword } from '../component/forgotPassword';

const UpdatePassword = lazy(() => import('../component/forgotPassword/updatePassword'))
// import { UpdatePassword } from '../component/forgotPassword';

export default function App() {
  let userId = '';
  let token = '';
  return (
    
    <div className=""
    //  style={{ backgroundImage: "url(dist\sincerely-media-DgQf1dUKUTM-unsplash.jpg)" }}
      >
      <HashRouter>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <PrivateRoute exact path="/" component={HomePage} />
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
        </Suspense >
      </HashRouter>
     
    </div>
  );
}

// export default App;
