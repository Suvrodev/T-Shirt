import React, { useContext } from 'react';
import { RingContext } from './GrandPa';

const Brother = () => {
    const angti=useContext(RingContext)
    return (
        <div>
            <h2>Brother</h2>
            <p> {angti} </p>
        </div>
    );
};

export default Brother;