import React, {useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';


import {history} from '../../_helpers/history';

const LoginForm = () => {

  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const {username, password} = inputs;
  const location = useLocation();

  
  const handleChange = (event) => {
    const {name, value} = event.target;
    setInputs((inputs) => ({...inputs, [name]: value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (username && password) {
      // this is to return url from location state or default to home page
      const {from} = location.state || {from: {pathname: '/'}};
      
    }
  };

  // reset login status
  // useEffect(() => {
    

  //   if (history.location.state && history.location.state.transaction) {
  //     let state = {...history.location.state};
  //     delete state.transaction;
  //     history.replace({...history.location, state});
  //   }
  // }, []);

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
                  onChange={handleChange}
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
                  onChange={handleChange}
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

export default LoginForm;
