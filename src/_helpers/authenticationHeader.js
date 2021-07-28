// export default function authHeader() {
//   // return authorization header with jwt token
//   let user = JSON.parse(localStorage.getItem('user'));

//   if (user && user.token) {
//     return {Authorization: 'Bearer ' + user.token};
//   } else {
//     return {};
//   }
// }

//for Node Express back-end, please use x-access-token header like this:

export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.accessToken) {
    // for Node.js Express back-end
    return { 'x-access-token': user.accessToken };
  } else {
    return {};
  }
}


//for Node Express back-end, please use x-access-token header like this:

// export default function authHeader() {
//   const user = JSON.parse(localStorage.getItem('user'));

//   if (user && user.token) {
//     // for Node.js Express back-end
//     return { 'x-access-token': user.token };
//   } else {
//     return {};
//   }
// }