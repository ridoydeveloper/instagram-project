import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './Resetpass.scss';
import AuthFooter from '../../components/AuthFooter/AuthFooter';
import { createToast } from '../../utility/toast';

const Resetpass = () => {

  // get params 

  const { token } = useParams();
  const navigate = useNavigate();

  

  // email state
  const [password , setPassword] = useState('');
  const [confirmPassword , setConfirmPassword] = useState('');
  const [ msg , setMsg] = useState({

    type : '',
    msg : '',
    status : false
  });


   const handlePasswordReset = async (e) => {

    e.preventDefault();

  try {


    if(!password){

      
      setMsg({

        type : 'danger',
        msg : 'Please set a password',
        status : true

      })

    }else if(password !== confirmPassword ){

      setMsg({
        type : 'warning',
        msg : 'Password not match',
        status : true
      });

    }else{
 
    
       axios.post('http://localhost:4000/api/user/reset-password' , { token, password })
      .then( res => {

        console.log(res);
        

      })
      .catch(error => {

        console.log(error);
        navigate('/login')
      
      });


      setMsg({

        type : '',
        msg : '',
        status : false
      });

    }
    
  } catch (error) {

    createToast('Time out. Please try again')
    
  }

   }


  return (
    

    <div className='reset-container'>



<div className="login-wraper">
    <a className='login-logo-link' href=""><img className='login-logo' src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" /></a>

    <div className='forgot-text'>
      <h2>New password</h2>
      <span></span>
    </div>
    {msg.status && <p className={ `alert alert-${msg.type}`}> { msg.msg } </p> }
  <form method='POST' onSubmit={ handlePasswordReset }  className="login-form">

    <input type="password" name='password' value={ password }  onChange={ e => setPassword(e.target.value)} className="login-input"  placeholder='New password'/>

    <input type="password" name='confirmPassword' value={ confirmPassword } onChange={ e => setConfirmPassword(e.target.value)} className="login-input"  placeholder='Confirm your password'/>
   
    <button type='submit' className='login-submit'>Confirm</button>
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

export default Resetpass;