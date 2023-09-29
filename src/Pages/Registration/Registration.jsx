import React, { useContext, useState } from 'react';
import './Registration.css'
import { Helmet } from 'react-helmet-async';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';
const imageHosting_Token=import.meta.env.VITE_IMAGE_TOKEN
const Registration = () => {

    console.log("Token: ",imageHosting_Token);
    const imageHostingUrl=`https://api.imgbb.com/1/upload?key=${imageHosting_Token}`

    const navigate=useNavigate()
    const {mailRegistration,successfullToast,unSuccessfullToast}=useContext(AuthContext)

    const [showPassword,setShowPassword]=useState(false)
    const [showConfirmPassword,setShowConfirmPassword]=useState(false)
    const [accept,setAccept]=useState(false)
    const handlePassword=()=>{
        setShowPassword(!showPassword)
        console.log(showPassword);
    }
   

    const handleAccept=()=>{
        setAccept(!accept)
        console.log(accept);
    }
    const handleConfirmPassword=()=>{
        setShowConfirmPassword(!showConfirmPassword)
    }



    const updateUser=(user,name,photo)=>{
        console.log("Heating Update");
        updateProfile(user,{
            displayName: name,
            photoURL: photo
        })
        .then(res=>{
            console.log("Update Result: ",res);
            successfullToast("Successfully Registered")
            navigate('/')
        })
        .catch(error=>{
            console.log("Update Error: ",error.message);
            unSuccessfullToast("Something Is Going Wrong")
        })
    }

    const handleRegistration=(event)=>{
        event.preventDefault()
        const Form=event.target;
        const name=Form.name.value;
        const photo=Form.photo.files[0]
        const email=Form.email.value;
        const password=Form.password.value;
        const ConfirmPassword=Form.Cpassword.value
        let uploadedImage;

       

        if(password.length<6){
            unSuccessfullToast("Password Should be more than 5")
            return 
        }
        if(password!==ConfirmPassword){
            unSuccessfullToast("Password and Confirm Password Doesn't match")
            return
        }

        console.log("Suvrodeb: ",photo);
        if(photo){
            const formData = new FormData();
            formData.append('image', photo);

            fetch(imageHostingUrl,{
                method: 'POST',
                body:formData
            })
            .then(res=>res.json())
            .then(imageResponse=>{
                uploadedImage=imageResponse.data.display_url

                /////////Registration start/////////
                mailRegistration(email,password)
                .then(result=>{
                    const loggesUser=result.user;
                    console.log(loggesUser);
                    updateUser(loggesUser,name,uploadedImage)
                })
                .catch(error=>{
                    console.log("Error: ",error.message);
                    unSuccessfullToast("Something Is Going Wrong")
                })
                //////////////////////////////
               
            })
        }
    }
    return (
        <div>
              <Helmet>
                <title>Registration || Dragon News</title>
              </Helmet>

            
            <div className='bg-white'>
                  
                <div className='hereForm  '>
                    
                   <form action="" onSubmit={handleRegistration} className='w-[80%] mx-auto'>
                        <h1 className='text-black font-bold text-center'>Registration Your Account</h1>
                        <p className='border w-[80%] mx-auto my-5'></p>
                        <p className='font-bold my-4'>Name</p>
                        <input className='w-[100%] p-2 mx-auto text-white border-0 outline-none' type="text" name="name" id="" placeholder='Enter your Name' required/>
                        <p className='font-bold my-4'>Upload Photo </p>
                        <input className='w-[100%] p-2 mx-auto text-white border-0 outline-none' type="file" name="photo" id="" placeholder='Enter your Photo url' required/>
                        <p className='font-bold my-4'>Email Address</p>
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
                        <p className='font-bold my-4'>Re-Type Password</p>
                        <div className='relative'>
                            <input className='w-[100%] p-2 mx-auto text-white border-0 outline-none' type={showConfirmPassword? "text" : "password"} name="Cpassword" id="" placeholder='Retype Password' required/>
                            <div onClick={handleConfirmPassword}>
                              {
                                showConfirmPassword? <FaEyeSlash className='ICON'/> : <FaEye className='ICON'/>
                              }
                           </div>
                        </div>
                        <div className='flex gap-2 mt-2'>
                            <input onClick={handleAccept} type="checkbox" name="" id="" />
                            <p>Accept our therm and condition</p>
                        </div>
                        <br />
                        <button disabled={!accept} className='btn bg-black text-white w-[100%] mt-5'>Registration</button>
                        <p className='text-center mt-2 text-black'>Already Have An Account ? <Link to={'/login'} className='text-red-500 font-bold'>Login</Link></p>
                   </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;