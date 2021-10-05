import React, {useState, useEffect} from 'react';

const baseUrl = "http://localhost:3001/users";

// //request interceptor to add the auth token header to requests
// axios.interceptors.request.use(
//     (config) => {
//       const accessToken = localStorage.getItem("accessToken");
//       if (accessToken) {
//         config.headers["x-auth-token"] = accessToken;
//       }
//       return config;
//     },
//     (error) => {
//       Promise.reject(error);
//     }
//   );
  
//   //response interceptor to refresh token on receiving token expired error
//   axios.interceptors.response.use(
//     (response) => {
//       return response;
//     },
//     function (error) {
//       const originalRequest = error.config;
//       let refreshToken = localStorage.getItem("refreshToken");
  
//       if (
//         refreshToken &&
//         error.response.status === 401 &&
//         !originalRequest._retry
//       ) {
//         originalRequest._retry = true;
//         return axios
//           .post(`${baseUrl}/refresh_token`, { refreshToken: refreshToken })
//           .then((res) => {
//             if (res.status === 200) {
//               localStorage.setItem("accessToken", res.data.accessToken);
//               console.log("Access token refreshed!");
//               return axios(originalRequest);
//             }
//           });
//       }
//       return Promise.reject(error);
//     }
//   );

  const getProtected = () => {
    return axios.get(`${baseUrl}/protected_user`);
  }
  

 const UserManagement = () =>{

    const [userState, setUserState] = useState({
        isLoggedIn: false,
        user: null
      });
    
    useEffect(() => {
        (async () => {
          let accessToken = localStorage.getItem("accessToken");
          if (accessToken) {
            try {
              const res = await getProtected();
              console.log(res.data);
              setUserState({
                ...userState,
                isLoggedIn: true,
                user: res.data.user
              });
            
            } catch (error) {
              console.error(error);
            //   alert(error.response.data.error);
            }
          }
        })();
      }, []);

    return(
        <div>
            <p>Here are the users</p>:
            {/* <h4>{userState.isLoggedIn && userState.user.username}</h4> */}
            <h4>{userState.isLoggedIn && userState.user}</h4>
            
        </div>
    )
}

export default UserManagement;
