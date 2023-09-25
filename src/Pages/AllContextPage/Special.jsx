import React, { useContext } from 'react';
import { RingContext } from './GrandPa';

const Special = ({ring}) => {
    const Aungti=useContext(RingContext)
    return (
        <div>
           
            <h2>Special</h2>
            <p> গুপ্তধন : {ring} </p>
            <p>Next: {Aungti} </p>
        </div>
    );
};

export default Special;