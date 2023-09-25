import React, { useContext } from 'react';
import { MoneyContext, RingContext } from './GrandPa';

const Sister = () => {
    const ring=useContext(RingContext)
    const [m]=useContext(MoneyContext)
    return (
        <div>
            <h2>Sister</h2>
            <p>{ring}</p>
            <p>Frandpa Money: {m} </p>
        </div>
    );
};

export default Sister;