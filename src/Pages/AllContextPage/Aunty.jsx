import React from 'react';
import Cousine from './Cousine';

const Aunty = ({ring}) => {
    return (
        <div>
            <h2>Aunty</h2>
            <section className='flex'>
                <Cousine> Cousin-4 (Aunty) </Cousine>
                <Cousine> Cousin-5 (Aunty)  </Cousine>
                <Cousine hasfriend={"Sajib"}  ring={ring}> Cousin-6 (Aunty) </Cousine>
            </section>
        </div>
    );
};

export default Aunty;