'use client'
import React, { useState } from 'react'
const Counter = () => {
    const [counter,setCounter] = useState(0) ;
    function itemCount(){
        if(counter > 0) setCounter(counter-1)
    }
  return (
    <div className=' flex items-center justify-start'>
        <button onClick={()=>{setCounter(counter+1)}} className='text-2xl font-extrabold border-2 w-10 h-10 flex items-center justify-center'>+</button>
        <span className='text-lg font-extrabold border-2 h-10 w-10 flex items-center justify-center'>{counter}</span>
        <button onClick={itemCount} className='text-2xl font-extrabold border-2 w-10 h-10 flex items-center justify-center'>-</button>
    </div>
  )
}

export default Counter