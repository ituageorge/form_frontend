import React, {useState, useEffect, useRef} from 'react';
// import {BrowserRouter as Router, Switch, Redirect, Link} from 'react-router-dom';
import {Link, useLocation, useHistory, Redirect, withRouter} from 'react-router-dom';
import axios from 'axios';

import regeneratorRuntime from "regenerator-runtime";

export const RegistrationForm = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const [profileImg, setProfileImg] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitted(true);
    let formData = new FormData();
    formData.append('profileImg', profileImg);
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('username', username);
    formData.append('password', password);

      if (firstName && lastName && username && password) {

        axios.post('http://localhost:3000/users/upload',
         formData
        )
        .then(function (response) {
          console.log('response',response);
        
        })
        .catch(function (error) {
          console.log(error);
        }); 

    }
    history.push('/login');
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
                  (submitted && !firstName ? ' has-error' : '')
                }
              >
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  className="form-control my-3"
                  // ref={firstNameEl}
                  name="firstName"
                  // defaultValue ={user.firstName}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  // onChange={handleChange}
                  placeholder="First Name"
                />
                {submitted && !firstName && (
                  <div className="help-block">First Name is required</div>
                )}
              </div>
              <div
                className={
                  'form-group col-lg-7' +
                  (submitted && !lastName ? ' has-error' : '')
                }
              >
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  className="form-control my-3"
                  // ref={lastNameEl}
                  value={lastName}
                  name="lastName"
                  // defaultValue={user.lastName}
                  // onChange={handleChange}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last Name"
                />
                {submitted && !lastName && (
                  <div className="help-block">Last Name is required</div>
                )}
              </div>
              <div
                className={
                  'form-group col-lg-7' +
                  (submitted && !username ? ' has-error' : '')
                }
              >
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control my-3"
                  // ref={usernameEl}
                  value={username}
                  name="username"
                  // defaultValue={user.username}
                  // onChange={handleChange}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Username"
                />
                {submitted && !username && (
                  <div className="help-block">Username is required</div>
                )}
              </div>
              <div
                className={
                  'form-group col-lg-7' +
                  (submitted && !password ? ' has-error' : '')
                }
              >
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control my-3 p-4"
                  // ref={passwordEl}
                  value={password}
                  name="password"
                  // defaultValue={user.password}
                  // onChange={handleChange}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
                {submitted && !password && (
                  <div className="help-block">Password is required</div>
                )}
              </div>

              <div
                className={
                  'form-group col-lg-7'
                  //  +
                  // (submitted && !user ? ' has-error' : '')
                }
              >
                <label htmlFor="userImage">Your passport</label>
                <input
                  type="file"
                  accept="image/*"
                  // ref={profileImgEl}
                  filename="profileImg"
                  // value={profileImg}
                  defaultValue={profileImg}
                  onChange={(e) => setProfileImg(e.target.files[0])}
                  className="form-control my-3 "
                  placeholder="please upload your image"
                />

              {/* <FileInput /> */}
                
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
