import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

import 'regenerator-runtime/runtime';

const baseUrl = 'http://localhost:3000/users';

//request interceptor to add the auth token header to requests
axios.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers['x-auth-token'] = accessToken;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

//response interceptor to refresh token on receiving token expired error
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    const originalRequest = error.config;
    let refreshToken = localStorage.getItem('refreshToken');

    if (
      refreshToken &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      return axios
        .post(`${baseUrl}/refresh_token`, { refreshToken: refreshToken })
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem('accessToken', res.data.accessToken);
            console.log('Access token refreshed!');
            return axios(originalRequest);
          }
        });
    }
    return Promise.reject(error);
  },
);

export default function LoginForm() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const [submitted, setSubmitted] = useState(false);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    axios
      .post(`${baseUrl}/login`, {
        username: username,
        password: password,
      })
      .then(
        (response) => {
          console.log('response111111', response);
          if (response) {
            let { accessToken, refreshToken, findLoginUser } = response.data;
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            history.push({
              pathname: '/',
              findLoginUser,
              // state: {_id: "0001", name: "AZ"}
            });
          }
          return response;
        },
        (error) => {
          if (error.response) {
            // client received an error response (5xx, 4xx)
            console.log('errorRes', error.response);
          } else if (error.request) {
            // client never received a response, or request never left
            console.log('errorReq', error.request);
          } else {
            // anything else
            console.log('eeeror', error);
          }
        },
      );

  };

  return (
    <div className="row no-gutters">
      <div className="col  pt-3">
        <h1 className="font-weight-bold">Exam Time Application</h1>
        <h4>Sign into your account</h4>
        <form name="form row" onSubmit={handleSubmit}>
          <div
            className={' col' + (submitted && !username ? ' has-error' : '')}
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
              'form-group col' + (submitted && !username ? ' has-error' : '')
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
          <div className="form-row col">
            <button className="btn1 btn1 mt-3 mb-5">
              {' '}
              <span className="buttonText">Login</span>{' '}
            </button>
          </div>

          <Link to="/recover/password">Forgot password?</Link>
          <p>
            Don't have an account?
            <Link to="/register">Register here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
