import React, { createContext, useState } from 'react';
import Father from './Father';
import Auncle from './Auncle';
import Aunty from './Aunty';
import './Grandpa.css'


export const RingContext=createContext('Gold')
export const MoneyContext=createContext(100)

const GrandPa = () => {
    const ring="Diamond"
    const [money,setMoney]=useState(0)
    return (
        <div className='grandpa'>
            <h2>GrandPa</h2>
            <p>Has Money: {money} </p>
            

            <MoneyContext.Provider value={[money,setMoney]}>
                <RingContext.Provider value='Gold Ring'>
                    <section className='flex flex-wrap'>
                        <Father ring={ring}></Father>
                        <Auncle/>
                        <Aunty ring={ring}></Aunty>
                    </section>
                </RingContext.Provider>
            </MoneyContext.Provider>
           
        </div>
    );
};

export default GrandPa;