import React, {useState, useEffect} from 'react';
import {Link, useLocation, useHistory, Redirect, withRouter} from 'react-router-dom';
// import {BrowserRouter as Router, Switch, Redirect, Link} from 'react-router-dom';
import axios from 'axios';


// import {history} from '../../_helpers/history';

const LoginForm = () => {

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const [submitted, setSubmitted] = useState(false);

  const location = useLocation();
  const history = useHistory();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    let formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    if (username && password) {
      axios.post('http://localhost:3000/users/login',
      formData
     )
     .then(function (response) {
       console.log('response', response);
       
     })
     .catch(function (error) {
       console.log('errorcatch',error);
       
     });
        
      // history.push('/') ;
      
    }
    history.push('/');
    
  };

  // reset login status
  useEffect(() => {
    
  }, []);

  return (
    <section className="form">
      <div className="container">
        <div className="row no-gutters">
          <div className="col-lg-4">
            <img src="" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8  pt-2">
            <h1 className="font-weight-bold">Exam Time Application</h1>
            <h4>Sign into your account</h4>
            <form name="form"
             onSubmit={handleSubmit}
             >
              <div
                className={
                  'form-group col-lg-7' +
                  (submitted && !username ? ' has-error' : '')
                }
              >
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  placeholder="Username"
                  className="form-control my-3 p-4"
                  name="username"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                />
                {submitted && !username && (
                  <div className="help-block">Username is required</div>
                )}
              </div>
              <div
                className={
                  'form-group col-lg-7' +
                  (submitted && !username ? ' has-error' : '')
                }
              >
                <label htmlFor="username">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control my-3 p-4"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {submitted && !password && (
                  <div className="help-block">Password is required</div>
                )}
              </div>
              <div className="form-row col-lg-7">
                <button className="btn1 btn1 mt-3 mb-5">
                  
                  Login
                </button>
                {/* {loggingIn && <img src=""/>} */}
              </div>
              <a href="#">Forgot password</a>
              <p>
                Don't have an account?
                <Link to="/register">Register here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withRouter(LoginForm);
