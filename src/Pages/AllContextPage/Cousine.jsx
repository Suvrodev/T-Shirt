import React from 'react';
import Friend from './Friend';

const Cousine = ({children,hasfriend,ring}) => {
    return (
        <div>
            <h2>Cousine</h2>
            <p> <small>{children}</small> </p>
            {hasfriend && <Friend ring={ring}></Friend>}
        </div>
    );
};

export default Cousine;