import React from 'react';
import ReactDOM from 'react-dom';
// import { HashRouter } from 'react-router-dom'

import  App  from './router/AppRouter';



 const wrapper = document.getElementById('container');
wrapper
  ? ReactDOM.render(
    // <HashRouter>
      <App />,
    // </HashRouter>,
      wrapper,
    )
  : false;
