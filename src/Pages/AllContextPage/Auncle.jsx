import React, { useContext } from 'react';
import Cousine from './Cousine';
import { MoneyContext } from './GrandPa';

const Auncle = () => {
    const [money,setMoney]=useContext(MoneyContext)
    return (
        <div>
            <h2>Auncle</h2>
            <p>Grandpa Money: {money} </p>
            <button onClick={()=>setMoney(money+1000)} className='btn btn-neutral'>Send 1000 Taka</button>
            <section className='flex'>
                 <Cousine> Cousin-1 (Uncle) </Cousine>
                 <Cousine> Cousin-2 (Uncle) </Cousine>
                 <Cousine> Cousin-3 (Uncle)</Cousine>
            </section>
        </div>
    );
};

export default Auncle;