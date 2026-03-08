import React from 'react'
import { FaTwitch } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import Image from 'next/image';
const page = ({name,image,role}) => {
  return (
    <div className='w-full max-w-2xl  '>
            <div className='w-full aspect-square bg-red-500 relative overflow-hidden'>
              <Image src={image} alt='image' fill className='object-cover hover:scale-110 transition-all duration-500 ' />
            </div>
            <div className='text-white flex items-center justify-between mt-4 px-3'>
              <div>
                <h4 className='font-bold text-2xl uppercase'>{name}</h4>
                <span className='text-purple-500 text-sm font-semibold uppercase'>{role}</span>
              </div>
              <div className='flex items-center gap-4 text-lg'>

                <span><FaTwitch /></span>
                <span><FaXTwitter /></span>
                <span><FaFacebookF /></span>
              </div>
            </div>
          </div>
  )
}

export default page