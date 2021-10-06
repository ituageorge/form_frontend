import React, { useState } from 'react';
import {
  Link,
} from 'react-router-dom';
import axios from 'axios';
import './recoverPassword.css'

// import {history} from '../../_helpers/history';

const baseUrl = 'http://localhost:3000/users';



 const RecoverPassword = ({message}) => {
    const [ email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    

  const sendPasswordResetEmail = e => {
    e.preventDefault()
    axios.post(`${baseUrl}/forgot_password/${email}`).then(
      (response) => {
        console.log('response111111', response.data);
        if (response) {

         message = response.data.message
          console.log('message', message)
         
        }
        return message;
        
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
   
    setSubmitted(true);
    setEmail("");
    }
    return (
        <div className= "recoverpasswordstyles">
        <h3>Reset your password</h3>
        {submitted ? (
          <div className="reset-password-form-sent-wrapper">
            <p>
              If that account is in our system, we emailed you a link to reset
              your password.
            </p>
            
            <Link to="/login" className="">
              Return to sign in
            </Link>
          </div>
        ) : (
          <div className="reset-password-form-wrapper">
            <p>
              It happens to the best of us. Enter your email and we'll send you
              reset instructions.
            </p>
            <form className="form row" onSubmit={sendPasswordResetEmail}>
            <div
                className={
                  '' +
                  (submitted && !email ? ' has-error' : '')
                }
              >
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control my-3 p-4"
                  // ref={emailEl}
                  value={email}
                  name="email"
                  // defaultValue={email}
                  // onChange={handleChange}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                />
                {submitted && !email && (
                  <div className="help-block">Email is required</div>
                )}
              </div>

              <div className="form-row col">      
              <button className="btn-primary password-reset-btn"> <span className="buttonText">Send password reset link to email</span>
              </button>
               </div>   
            </form>
            <Link to="/login">I remember my password</Link>
          </div>
        )}
        </div>
      
    )

}

export default RecoverPassword