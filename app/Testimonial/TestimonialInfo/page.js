import Image from 'next/image';
import React from 'react'
import { BsChatLeftQuote } from "react-icons/bs";
const page = ({name,image,content}) => {
  return (
    <div className='max-w-2xl p-10 space-y-3 lg:space-y-6 text-gray-400 bg-linear-to-br from-gray-950 to-gray-700 rounded-lg  '>

    <div className=' text-4xl lg:text-5xl  text-purple-600'><BsChatLeftQuote /></div>
    <p className='lg:text-[17px] text-[15px]' >{content}</p>
        <div className='flex items-center gap-3'>
            <div className='w-12 h-12 rounded-full bg-green-500 relative overflow-hidden border-2 border-gray-200'>
              <Image src={image} alt='image' fill className='object-cover' />
            </div>
            <div className='uppercase space-y-0'>
                <h5 className='font-bold text-white text-sm lg:text-[16px]'>{name}</h5>
                <span className='text-xs font-semibold'>GAMMER</span>
            </div>
        </div>
    </div>
  )
}

export default page