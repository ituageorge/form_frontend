import React, { useState, useEffect} from 'react';
import { useLocation,
  useHistory,} from 'react-router-dom';
import axios from 'axios';
import {Buffer} from 'buffer';

import 'regenerator-runtime/runtime';

// import {Login} from '../login'

import QuestionApp from '../question/questionComponent';
// const {QuestionApp} = React.lazy(() => import('../question'));

import {UserManagement} from './';
// const {UserManagement} = React.lazy(() => import('./'));

import './index.css';

const baseUrl = 'http://localhost:3000/users';

// request interceptor to add the auth token header to requests
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
        .post(`${baseUrl}/refresh_token`, {refreshToken: refreshToken})
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

const HomePage = (
  findLoginUser
) => {

  const history = useHistory();
const location = useLocation();

  const [appState, setAppState] = useState({
    display: 'hide',
    user: null,
    authUser: null,
    profileUserImg: null,
  });

  const getProtected = () => {
    return axios.get(`${baseUrl}/protected_user`);
  };

  useEffect(() => {
    (async () => {
      setAppState({...appState, loading: true});
      let accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        try {
          Buffer.from('anything','base64');
          const res = await getProtected();
          console.log('res.data', res.data);
          console.log('findLoginUser', findLoginUser)
          const img = findLoginUser.location.findLoginUser.profileImg.data ;
          // const authUserImg = new Buffer.from(img.data).toString("ascii")
          // console.log('authUserImg', authUserImg);
          console.log('img', img);

          let base64String = new Buffer.from(img).toString("base64")

          // var data = new Uint8Array(img);
          // var base64 = bufferToBase64(data);


          setAppState({
            ...appState,
            display: 'show',
            // user: findLoginUser.firstName,
            user: res.data.user.username,
            authUser: findLoginUser.location.findLoginUser.username,
            // profileUserImg:authUserImg,
            // profileUserImg:img,
            profileUserImg: base64String,


          });


        } catch (error) {
          console.error(error);
          alert(error.response.data.error);
          setAppState({...appState, loading: false});
        }
      }
    })();
  }, []);

  const handleLogout = async () => {
    const logout = (body) => {
      return axios.delete(`${baseUrl}/logout`, body);

    };

    try {
     
      // setAppState({ ...appState, loading: true });
      let refreshToken = localStorage.getItem('refreshToken');
      localStorage.removeItem('accessToken');
      // localStorage.removeItem("data");
      localStorage.removeItem('refreshToken');
      history.push('/login');
      window.location.reload();
      await logout(refreshToken);
     
    } catch (error) {
      console.error(error);
      // setAppState({ ...appState, loading: false });
      alert(error.response.error);
    }
  };

  return (
    // className={`${appState.display} user-info`}
    // <div className={`${appState.display} col-md-6 col-md-offset-3`}>
    <div className= 'col-md-6 col-md-offset-3'>
      
      {/* <UserManagement /> */}

      {/* // <div className=""> */}
      <h1>Hi {`${appState.user}`}!</h1>
      <p>You are logged in {`${appState.authUser}`} !</p>
      <p>image :{`${appState.profileUserImg}`} </p>
      <img src={appState.profileUserImg} alt="yhyhhimage" />
      <img src={`data:image/png;base64,${appState.profileUserImg}`} alt="hhhhhhhimage"/>

      <QuestionApp />

      <p>
        <button onClick={handleLogout}>Log Out</button>
      </p>
  
    </div>
  );
};

export default HomePage;
