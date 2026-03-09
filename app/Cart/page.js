import React from 'react'
import Banner from '../Banner/page'
import Link from 'next/link'
const Cart = () => {
  return (
    <>
    <Banner content='CART' />
    <div className='bg-black'>
        <div className='max-w-6xl w-full mx-auto py-15 space-y-10 px-3'>
        <div className='text-lg text-gray-900 font-bold bg-gray-500 p-2 border-l-4 border-l-purple-500'>Your cart is empty</div>
        <div>

            <Link href={'/Shop'} className='text-sm rounded-lg text-white font-bold bg-purple-500 py-2 px-5'>Return to Shop</Link>
        </div>
        </div>
    </div>
    </>
  )
}

export default Cart