import React from 'react';
import { Link } from 'react-router-dom';

const Tshirt = ({shirt,handleOrder}) => {
    // console.log(shirt);
    const {_id,gender,index,name,picture,price}=shirt;
    
   
    return (
        <div className='border-2 p-2 rounded-lg flex flex-col justify-between '>
            <img className='w-full h-[220px]' src={picture} alt="" />
           <div className='text-center'>
                 <h1>{name}</h1>
                <p>{gender}</p>
           </div>
           <div className='flex justify-between items-center'>
              <p>Price: ${price} </p>
              <p>Index: {index}</p>
           </div>
           <button onClick={()=>handleOrder(shirt)} className='btn btn-primary mt-2'>Order</button>
           <button className='btn btn-accent mt-1'> <Link to={`/shirt/${_id}`}>Deatils</Link> </button>
        </div>
    );
};

export default Tshirt;