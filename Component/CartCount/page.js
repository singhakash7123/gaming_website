'use client'
import React, { useState } from 'react'

const page = () => {
    const [count,setCount] = useState(0)
    function decrement(){
        if(count>0)setCount(count-1)
    }
    function Increment(){
        setCount(count+1)
    }
    
  return (
    <div>
        <button className='border-2 border-white text-white p-3 text-xl font-bold' onClick={decrement}>-</button>
        <span className=' text-white text-xl font-bold p-4'>{count}</span>
        <button className='border-2 border-white text-white p-3 text-xl font-bold' onClick={Increment}>+</button>
    </div>
  )
}

export default page