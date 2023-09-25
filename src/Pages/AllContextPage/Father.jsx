import React from 'react';
import MySelf from './MySelf';
import Sister from './Sister';
import Brother from './Brother';

const Father = ({ring}) => {
    return (
        <div>
            <h2>Father</h2>
            <section className='flex'>
                <MySelf ring={ring}></MySelf>
                <Sister/>
                <Brother/>
            </section>
        </div>
    );
};

export default Father;