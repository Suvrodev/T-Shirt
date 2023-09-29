import React, { useContext, useState } from 'react';
import './Login.css'
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../AuthProvider/AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';

const Login = () => {

    const {mailLogin,successfullToast,unSuccessfullToast,googleLogin}=useContext(AuthContext)

    const [showPassword,setShowPassword]=useState(false)
    const handlePassword=()=>{
        setShowPassword(!showPassword)
        console.log(showPassword);
    }


    const location=useLocation()
    console.log("Location Login: ",location);
    const targetPage=location?.state?.from || '/'
    const navigate=useNavigate()

    ////Google start
    const handleLoginByGoogle=()=>{
        googleLogin()
        .then(res=>{
            const loggedUser=res.user;
            console.log("Google: ",loggedUser);
            navigate(targetPage)
        })
        .catch(error=>{
            console.log("Error: ",error.message);
        })
    }
    ////Google end

    const handleLogin=(event)=>{
        event.preventDefault()
        const Form=event.target;
        const email=Form.email.value;
        const password=Form.password.value;

        mailLogin(email,password)
        .then(res=>{
            const loggedUser=res.user;
            console.log(loggedUser);
            navigate(targetPage)
            successfullToast("Successfully Login")
        })
        .catch(error=>{
            console.log("Error: ",error.message);
            unSuccessfullToast("Id or Password doesn't match")
        })
    }

    return (
        <div>
        <Helmet>
            <title>Login || Dragon News</title>
        </Helmet>

       
        <div className='bg-white'>
              
            <div className='hereForm  '>
                
               <form action="" onSubmit={handleLogin} className='w-[80%] mx-auto'>
                    <h1 className='text-black font-bold text-center'>Login Your Account</h1>
                    <p className='border w-[80%] mx-auto my-5'></p>
                    <p className='font-bold mb-4'>Email Address</p>
                    <input className='w-[100%] p-2 mx-auto text-white border-0 outline-none' type="email" name="email" id="" placeholder='Enter your email address' required/>
                    <p className='font-bold my-4'>Password</p>
                    <div className='relative'>
                        <input className='w-[100%] p-2 mx-auto text-white border-0 outline-none' type={showPassword? "text" : "password"} name="password" id="" placeholder='Enter your Password' required/>
                       <div onClick={handlePassword}>
                          {
                            showPassword? <FaEyeSlash className='ICON'/> : <FaEye className='ICON'/>
                          }
                       </div>
                    </div>
                    <br />
                    <button className='btn bg-black text-white w-[100%] mt-5'>Login</button>
                    <p className='text-center mt-2 text-black'>Dont’t Have An Account ? <Link to={'/registration'} className='text-red-500 font-bold'>Register</Link></p>
               </form>
               <div className='mt-2 w-[80%] mx-auto'>
                <h1 className='text-center text-xl text-black font-bold'>Login With</h1>
                <div className='text-center'>
                    <button onClick={handleLoginByGoogle} className='btn btn-warning text-white'> <FaGoogle/> </button>
                </div>
               </div>
            </div>
        </div>
    </div>
    );
};

export default Login;