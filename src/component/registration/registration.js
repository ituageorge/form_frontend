import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


export const RegistrationForm = () => {

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    profileImg: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;

    setUser((user) => ({...user, [name]: value}));
  };

  const onFileChange = (e) => {
    setUser({profileImg: e.target.files[0]});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (user.firstName && user.lastName && user.username && user.password) {
    
    }
  };

 
  return (
    // <form name="form" onSubmit={handleSubmit}>
    <section className="form">
      <div className="container">
        <div className="row no-gutters">
          <div className="col-lg-5">
            <img src="" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-7 pt-3">
            <h1 className="font-weight-bold">Exam Timed App</h1>
            <h4>Register your account</h4>
            <form name="form" onSubmit={handleSubmit}>
              <div
                className={
                  'form-group col-lg-7' +
                  (submitted && !user.firstName ? ' has-error' : '')
                }
              >
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  className="form-control my-3 "
                  name="firstName"
                  value={user.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                />
                {submitted && !user.firstName && (
                  <div className="help-block">First Name is required</div>
                )}
              </div>
              <div
                className={
                  'form-group col-lg-7' +
                  (submitted && !user.lastName ? ' has-error' : '')
                }
              >
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  className="form-control my-3 "
                  name="lastName"
                  value={user.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                />
                {submitted && !user.lastName && (
                  <div className="help-block">Last Name is required</div>
                )}
              </div>
              <div
                className={
                  'form-group col-lg-7' +
                  (submitted && !user.username ? ' has-error' : '')
                }
              >
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control my-3 "
                  name="username"
                  value={user.username}
                  onChange={handleChange}
                  placeholder="Username"
                />
                {submitted && !user.username && (
                  <div className="help-block">Username is required</div>
                )}
              </div>
              <div
                className={
                  'form-group col-lg-7' +
                  (submitted && !user.password ? ' has-error' : '')
                }
              >
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control my-3 p-4"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  placeholder="Password"
                />
                {submitted && !user.password && (
                  <div className="help-block">Password is required</div>
                )}
              </div>

              <div
                className={
                  'form-group col-lg-7' +
                  (submitted && !user ? ' has-error' : '')
                }
              >
                <label htmlFor="userImage">Your passport</label>
                <input
                  type="file"
                  accept="image/*"
                  filename="profileImg"
                  // value={user.profileImg}
                  onChange={onFileChange}
                  className="form-control my-3 "
                  placeholder="please upload your image"
                />
              </div>

              <div className="form-row">
                <div className="col-lg-7">
                  <button type="submit" className="btn1 btn1 mt-3 mb-5">
                   
                    Register
                  </button>
                </div>
              </div>
              <p>
                Already a member?
                <Link to="/login">Login here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
    
  );
};

