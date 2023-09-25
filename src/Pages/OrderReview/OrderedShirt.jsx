import React from 'react';
import { FaFacebook, FaSquare } from "react-icons/fa";
import { FaSquareXmark } from "react-icons/fa6";

const OrderedShirt = ({c,deleteOrder}) => {
    const {name,price}=c

    
    return (
       <div className='bg-green-600 mb-2 w-10/12  mx-auto rounded-lg flex justify-center items-center  gap-1'>
            <div className='w-10/12   h-full'>
                <h1>Name: {name} </h1>
                <p>Price: {price} </p>
            </div>

            <div className='  h-full w-2/12 flex items-center justify-center'>
                  <FaSquareXmark onClick={()=>deleteOrder(c)} className='text-red-500 w-full h-full' />
            </div>
           
       </div>
    );
};

export default OrderedShirt;