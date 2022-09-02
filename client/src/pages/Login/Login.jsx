import React from 'react'
import { useState } from 'react';
import { GrFacebook } from "react-icons/gr";
import { Link, useNavigate } from 'react-router-dom';
import AuthFooter from '../../components/AuthFooter/AuthFooter';
import './Login.scss';
import swal from 'sweetalert';
import axios from 'axios';
import cookie from 'js-cookie';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import LoderContext from '../../context/LoderContext';
import { createToast } from '../../utility/toast';



const Login = () => {


  // use auth context

  const { dispatch } = useContext(AuthContext);


  // loaser context

  const { loaderDispatch } = useContext(LoderContext);


  // use navigate

  const navigate = useNavigate();



  


// form field state


const [ input , setInput] = useState({

  auth : '',
  password : ''


});

  //handle input

  const handleInput = (e) => {

    setInput((prev) => ({ ...prev, [e.target.name] : e.target.value }));
    
  };

  
  //handle users login 
    
  const handleUserLogin = async (e) => {

    e.preventDefault();


    try {


      if( !input.auth || !input.password ){


        createToast('All fields are required');

      }else{

        await axios.post('http://localhost:4000/api/user/login' , { email : input.auth , password : input.password})
        .then(res => {

   
          if(res.data.user.isVerified){

            
          cookie.set('token',( res.data.token));
         
          dispatch({  type : 'LOGIN_USER_SUCCESS' , payload : res.data.user });
          navigate('/')
          loaderDispatch({type : 'LOADER_START' });

          }
          else{

                createToast('Verify your account');

          }

          



        });


      }
      
    } catch (error) {

      createToast('wrong password or email. Please try again');

    };




  }





  return (
         <div className='login-container'>



        <div className="login-wraper">
            <a className='login-logo-link' href=""><img className='login-logo' src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" /></a>

          <form onSubmit={ handleUserLogin } className="login-form">

            <input type="text" className="login-input" name='auth' value={input.auth} onChange={handleInput} placeholder='Phone number, username, or email'/>
            <input type="text" className="login-input" name='password' value={input.password} onChange={handleInput} placeholder='Password'/>
            <button type='submit' className='login-submit'>Log In</button>
          </form>

          <div className="divider">
             OR 
           </div>
           
           <a className='login-with-facebook' href=""> <GrFacebook/>Log in with Facebook </a>
           <Link className='forgot-password' to="/forgot-password">Forgot password?</Link>

        </div>

        <div className="singup-wrapaer">
          <samp className='signup-text'>Don't have an account? <Link to="/register" className='sign-up-link'>Sign up</Link> </samp>
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

export default Login;
















