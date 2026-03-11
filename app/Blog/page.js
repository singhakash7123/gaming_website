import React from 'react'
import Banner from '../Banner/page.js'
import Post from './Post/page.js'
import array from '../Data/Blog.js'
import { IoSearch } from "react-icons/io5";
import Link from 'next/link.js';
const Blog = async({params}) => {
  const posts = array.slice(0,5).map((item,index)=>{
    return <Post key={index} heading={item.heading} date={item.date} image={item.image} />
  })

 
  
  return (
    <>
    <Banner content={'BLOG'}/>
    <div className='w-full bg-black' data-aos="fade-up">
      <div className='w-full max-w-7xl mx-auto grid grid-cols-1
      gap-10 lg:grid-cols-[2fr_1fr] py-10 px-5'>
      <ul className='space-y-8 w-full max-w-3xl lg:max-w-none mx-auto lg:mx-0 '>
      {posts}
      </ul>
      <aside className='w-full max-w-3xl lg:max-w-none mx-auto lg:mx-0 '>
      <div className='flex items-center bg-purple-950 py-3 px-4 '>
        <input type='text' placeholder='Search' className='flex-1 text-white outline-0'  />
        <button className='text-xl text-purple-500 hover:text-white'><IoSearch /></button>
      </div>

      <div className='mt-6'>
        <h3 className='font-extrabold text-2xl text-white'> CATEGORIES</h3>
        <ul>
          <li className='mt-4'>
        <Link href={''} className='text-purple-500 text-lg font-bold hover:text-white underline'>ONLINE GAMES</Link>

          </li>
          <li className='mt-2'>
        <Link href={''} className='text-purple-500 text-lg font-bold hover:text-white underline'>UNGATEGORIZED</Link>

          </li>
        </ul>
      </div>


      <div className='mt-5'>
        <h3 className='text-white font-extrabold text-2xl'>TAGS</h3>
        <div className='w-full flex gap-2 flex-wrap mt-4'>
          <button className='text-gray-500 border-2 rounded-3xl hover:text-white hover:bg-purple-500 font-bold text-xl py-1 px-2'>3D GAMES</button>
          <button className='text-gray-500 border-2 rounded-3xl hover:text-white hover:bg-purple-500 font-bold text-xl py-1 px-2'>DIGITAL ART</button>
          <button className='text-gray-500 border-2 rounded-3xl hover:text-white hover:bg-purple-500 font-extrabold text-2xl py-1 px-2'>ESPORTS</button>
          <button className='text-gray-500 border-2 rounded-3xl hover:text-white hover:bg-purple-500 font-extrabold text-2xl py-1 px-2'>GAMES</button>
          <button className='text-gray-500 border-2 rounded-3xl hover:text-white hover:bg-purple-500 font-extrabold text-2xl py-1 px-2'>ONLINE GAMES</button>
          <button className='text-gray-500 border-2 rounded-3xl hover:text-white hover:bg-purple-500 font-light text-sm  px-2'>TABEL UIREEL</button>
        </div>
      </div>

      </aside>
      
    </div>
    </div>
    </>
  )
}

export default Blog