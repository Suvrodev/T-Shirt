import React, { useEffect, useState } from 'react';
import Tshirt from '../TShirt/Tshirt';
import './Home.css'
import OrderedShirt from '../OrderReview/OrderedShirt';
import Swal from 'sweetalert2';

const Home = () => {
    let a=10
    let message;
    if(a>0){
        message= <div><p>This is Check</p></div> 
    }

    const yesSwal=()=>{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Added Successfully',
            showConfirmButton: false,
            timer: 1000
          })
    }

    const noSwal=()=>{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Already Added',
            footer: '<a href="">Why do I have this issue?</a>'
          })
    }

    const [tshirts,setTshirts]=useState([])
    const api=`https://raw.githubusercontent.com/ProgrammingHero1/t-shirt-data/main/tshirt.json`
    useEffect(()=>{
        fetch(api)
        .then(res=>res.json())
        .then(data=>setTshirts(data))
    },[])


    const [cart,setCart]=useState([])
    const handleOrder=(shirt)=>{
        // console.log("Cart: ",cart);
        // console.log('Comming Shirt: ',shirt);

        const match=cart.filter(c=>c._id===shirt._id)
        // console.log("Match: ",match);
        if(match.length===0){
            const newCart=[...cart,shirt]
            setCart(newCart)
            yesSwal();
    

        }else{
           noSwal();
        }
    }
    
    const deleteOrder=(shirt)=>{
        // console.log("Delete",shirt);

        const deleteMatch=cart.filter(c=>c._id!==shirt._id)
        setCart(deleteMatch)
        // console.log("new Match: ",deleteMatch);
        // console.log("Which Length: ",deleteMatch.length);
    }

    
    return (
        <div className=''>
           
            {/* <h1>T-Shirts: {tshirts.length} </h1> */}

           
            <div className='makegrid'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    {
                        tshirts.map(shirt=><Tshirt
                        key={shirt._id}
                        shirt={shirt}
                        handleOrder={handleOrder}
                        ></Tshirt> )
                    }
                </div>

                <div className='bg-orange-400 text-center overflow-auto md:overflow-hidden h-[200px] md:h-[550px] sticky top-5'>
                    <h1 className='font-bold mb-2'>Order Summery <span>{cart.length}</span> </h1>
                    {
                        cart.length===0 && <p className='font-bold'>Please Add some product</p>
                    }


                    {
                        cart.length!=0 || <p className='font-bold'>Sweet Shirt</p>
                    }

                    
                    {
                       cart.length>0? <p className={`border-2 m-4 ${cart.length>2?`bg-yellow-400 ${cart.length>3?`bg-green-500`
                       :''}`
                       :''}`}> 
                       Thank you</p>  
                       : ''
                    }
                    <div>
                        {
                            cart.map(c=><OrderedShirt
                            key={c._id}
                            c={c}
                            deleteOrder={deleteOrder}
                            ></OrderedShirt> )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;