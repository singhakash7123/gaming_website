import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const ShopItems = ({type,price,image,slug}) => {
console.log(slug);
  return (
    <li className=' max-w-2xl '>
        <div className=' w-full aspect-square bg-gray-700 relative'>
          <Image src={image} alt='image' fill className='object-cover'/>
        </div>
        <div className='mt-5'>
            <h3 className='text-white font-extrabold text-xl'>{type}</h3>
            <h5 className='text-white font-extrabold text-xl mt-2 mb-5'>{price}</h5>
            <Link href={`/Shop/${type}/${slug}?image=${image.src}`} className='text-white font-extrabold  bg-purple-500 mt-8 py-2 px-6 rounded-lg '>Add to Cart</Link>
        </div>
    </li>
  )
}

export default ShopItems