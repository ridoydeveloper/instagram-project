 import React from 'react';
 import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createToast } from '../../utility/toast';
 
 const Verify = () => {

    const params = useParams();
    console.log(params);
    const navigate = useNavigate();
    
   useEffect(() => {

    axios.post('http://localhost:4000/api/user/verify' , params)

    .then( res => {

        createToast('Account activation Successful')
        navigate('/login');

    })
    .catch( error => {
      console.log(error);

      createToast('Account activation Failed')
      
    });
   });




   return (

     <div>Verify</div>
   )
 }
 
 export default Verify;