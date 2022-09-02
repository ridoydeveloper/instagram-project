import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthFooter from '../../components/AuthFooter/AuthFooter';
import './ForgotPass.scss';

const ForgotPass = () => {

  // email state
  const [email , setEmail] = useState('');
  const [ msg , setMsg] = useState({

    type : '',
    msg : '',
    status : false

  })


  const handlePasswordRecover = async (e) => {

    e.preventDefault();

    axios.post('http://localhost:4000/api/user/recover-password', { email })
    .then( res => {

        
     setMsg({

      type : 'success',
      msg  : 'A password recovery link send',
      status : true
     });



    })
    .catch(error => {


     setMsg({

      type : 'danger',
      msg  : 'Invalid Email or not axists',
      status : true
     });
    })

  }

  

  return (


<div className='forgot-container'>



<div className="login-wraper">
    <a className='login-logo-link' href=""><img className='login-logo' src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" /></a>

    <div className='forgot-text'>
      <h2>Trouble Logging In?</h2>
      <span>Enter your email, phone, or username and we'll send you a link to get back into your account.</span>
    </div>
    {msg.status && <p className={ `alert alert-${msg.type}`}> { msg.msg } </p> }
  <form method='POST' onSubmit={ handlePasswordRecover }  className="login-form">

    <input type="text" value={ email } onChange={ e => setEmail(e.target.value)} className="login-input"  placeholder='Email, Phone, or Username'/>
   
    <button type='submit' className='login-submit'>Send Login Link</button>
  </form>

  <div className="divider">
     OR 
   </div>
   
   <Link className='new-account' to="/register">Create New Account</Link>
   <div className="back-to-login">
 <Link to="/login" className='sign-up-link'>Back To Login</Link>  
</div>

</div>



<div className="get-app">
 <span className='app-text'>Get the app.</span>
 <div className="app-logo">
 <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="" />
 <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="" />
 </div>
      
</div>

<AuthFooter/>
</div>

  )
}

export default ForgotPass;