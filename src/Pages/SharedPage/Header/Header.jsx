import React, { useContext, useState } from 'react';
import { FaBars, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaSquareXmark } from "react-icons/fa6";
import ActiveLink from './ActiveLink';
import { AuthContext } from '../../AuthProvider/AuthProvider/AuthProvider';

const Header = () => {
    const {user,Logout_}=useContext(AuthContext)
    const [show,setShow]=useState(true)
    const handleNav=()=>{
        setShow(!show)
    }
    // console.log(show);
    return (
        <div>
            <div onClick={handleNav} className='md:hidden '>
               {
                 show? <FaSquareXmark/>:<FaBars />
               }
            </div>
            <nav className={`bg-green-600 m-2 flex flex-col md:flex-row w-5/12 md:w-full absolute md:static top-2 justify-center items-center gap-10 p-3 rounded-xl md:rounded-sm  font-bold text-lg duration-500 ${ show? 'top-2' : 'top-[-500px]'}`}>
                <ActiveLink to={'/'}>Home</ActiveLink>
                <ActiveLink to={'/grandpa'}>Context</ActiveLink>
                
                {
                    user?
                    <>
                        <img className='w-[30px] rounded-full' src={user?.photoURL} alt="" />
                        <button onClick={Logout_} className='btn btn-secondary'>Logout</button>
                    </>
                    :
                    <ActiveLink to={'/login'}>Login</ActiveLink>

                }
            </nav>
        </div>
    );
};

export default Header;