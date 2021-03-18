import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import {QuestionApp} from '../question';

const HomePage = () => {
 
 

  return (
    <div className="col-md-6 col-md-offset-3">
      {/* // <div className=""> */}
      {/* <h1>Hi {user.firstName}!</h1> */}
      <p>You are logged in !</p>
      <img src="" alt="" />

      <QuestionApp />

      <p>
        <Link to="/login">Logout</Link>
      </p>
    </div>
  );
};

export default HomePage;
