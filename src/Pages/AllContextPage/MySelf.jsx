import React from 'react';
import Special from './Special';

const MySelf = ({ring}) => {
    return (
        <div>
            <h2>My Self</h2>
            <section>
                <p>{ring}</p>
                <Special ring={ring}></Special>
            </section>
        </div>
    );
};

export default MySelf;