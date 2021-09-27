import React, { useState, useEffect } from 'react';
import {
  useLocation,
  useHistory,
  Link,
} from 'react-router-dom';
import axios from 'axios';
import PropTypes from "prop-types"
import './recoverPassword.css';

// import {history} from '../../_helpers/history';

const baseUrl = 'http://localhost:3000/users';

export const UpdatePassword = () => {
    const location = useLocation();
    const history = useHistory();
    const [ password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [ submitted, setSubmitted] = useState(false);
    const [message, setMessage] = useState("")


//   handleChange = key => e => {
//     this.setState({ [key]: e.target.value })
//   }


  const updateThePassword = e => {
    e.preventDefault()

   const userId = new URLSearchParams(location.search).get('userId');
   const accessToken = new URLSearchParams(location.search).get('accessToken');
console.log('userIdddd', userId);
console.log('accessssToken', accessToken);
if(!accessToken || !userId ) {
  history.push({
    pathname: '/login',
  });
  return alert('No access token or user Id');
  
}

if(password !== confirmPassword){
  setPassword('')
  setConfirmPassword('')
  return alert('Please cross-check and ensure your password is same as confirmPassword');

} else {
    axios
      .post(
        `${baseUrl}/reset_password/receive_new_password/${userId}/${accessToken}`,
        { password }
      ).then(
       (response) => {
         
           if (response.data.accessToken) {
          //  console.log('respUpdaate', response);
          //  if (response) {
            console.log('reessponnse', response)
             
          //   //  let {  findLoginUser } = response.data;
          //   //  localStorage.setItem('accessToken', accessToken);
          //   //  localStorage.setItem('refreshToken', refreshToken);
             
           }
     return  response;
         },
       (error) => {
           if (error.response) {
             // client received an error response (5xx, 4xx)
             console.log('errorUpdatePasswordRes', error);
          // message = error.response.data.message
            // alert(message)
           } else if (error.request) {
             // client never received a response, or request never left
             console.log('errorUpdatePasswordReq', error.request);
              // message = error.request.data.message
            //  alert(message)
           } else {
             // anything else
             console.log('eeeror', error);
             alert(error)
           }
         },
       );



      // .then((res) => {
      //   console.log("res", res)
      // })
      // .catch(err => console.warn("ERROR FROM SERVER UPDATING PASSWORD:", err));
      // setSubmitted(true);
  }
    // this.setState({ submitted: !this.state.submitted })
  }

    return (
          <div className="updatepasswordstyles">
        <h3 style={{ paddingBottom: "1.25rem" }}>Update your password</h3>
        {submitted ? (
          
          <div className="reset-password-form-sent-wrapper">
            <p>Your password has been saved.</p>
            <Link to="/login" className="ghost-btn">
              Sign back in
            </Link>
          </div>
        ) : (
          <div className="reset-password-form-wrapper">
            <form
              onSubmit={updateThePassword}
              style={{ paddingBottom: "1.5rem" }}
            >
              <input
                // onChange={this.handleChange("password")}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="New password"
                type="password"
                className="ghostInput"
              />
              <input
                // onChange={this.handleChange("confirmPassword")}
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                placeholder="Confirm password"
                type="password"
                className="ghostInput"
              />

              <button className="btn-primary password-reset-btn">
              Update password
              </button>
            </form>

            <p
              style={{
                fontSize: "1rem",
                maxWidth: "420px",
                paddingLeft: "0.5rem"
              }}
            >
              Make sure it's at least 8 characters including a number and a
              lowercase letter. Read some documentation on{" "}
              <a
                href="https://help.github.com/articles/creating-a-strong-password/"
                target="_blank"
                rel="noopener noreferrer"
              >
                safer password practices
              </a>
              .
            </p>
          </div>
        )}
        </div>
    )
}

// UpdatePassword.propTypes = {
//   token: PropTypes.string.isRequired,
//   userId: PropTypes.string.isRequired
// }

//  default UpdatePassword
