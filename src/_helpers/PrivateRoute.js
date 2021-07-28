import React from 'react';
import {Route, Redirect} from 'react-router-dom';

function PrivateRoute ({component: Component, roles, ...rest}) {
  const accessToken = localStorage.getItem('accessToken');
  return (
    <Route
      {...rest}
      render={(props) =>
        accessToken ? (
          <Component {...props} />
        ) : (
          <Redirect to={{pathname: '/login', state: {from: props.location}}} />
        )
      }
    />
  );
}

// export {PrivateRoute};
export default PrivateRoute;

// function PrivateRoute({ children, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         localStorage.getItem(accessToken) ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: location }
//             }}
//           />
//         )
//       }
//     />
//   );
// }
// export default PrivateRoute;