import React from 'react';
import { Link } from 'react-router-dom';

const ErrorElement = () => {
    return (
        <div className='w-10/12 bg-red-500 h-[450px] rounded-lg m-10 flex justify-center items-center flex-col gap-10'>
            <h1 className='font-bold text-2xl'>This Link is not Available</h1>
            <button className='btn btn-error text-white'> <Link to={'/'}>Go To Home</Link> </button>
        </div>
    );
};

export default ErrorElement;