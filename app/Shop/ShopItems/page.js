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
           
            <Link href={`/Shop/${encodeURIComponent(type)}/${slug}?image=${image?.src}`} className='text-white font-extrabold text-xl hover:text-purple-500 '>{type}</Link>
            <h5 className='text-white font-extrabold text-xl mt-2 mb-5'>{price}</h5>
        </div>
    </li>
  )
}

export default ShopItems