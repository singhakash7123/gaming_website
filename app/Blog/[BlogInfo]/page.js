import React from 'react'
import Banner from '../../Banner/page'
import { IoSearch } from "react-icons/io5";
import Link from 'next/link';
import Image from 'next/image';
const page = () => {
 
  return (
    <>
     <Banner content={'BLOG'}/>
    <div className='w-screen bg-black pt-25 '>
      <div className='max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center lg:items-start  lg:justify-between pb-20'>
      <div className=' lg:max-w-7/10 w-full rounded-xl overflow-hidden px-6 bg-black'>
        <div className='w-9/10 aspect-5/2 bg-red-400 '>
            
        </div>

        <p className='flex items-center gap-x-8 text-gray-500  mt-8 font-semibold'><span className='text-purple-500'>TINJA</span> <span> October 23, 2023</span></p>

        <p className='text-gray-500 mt-8'>
          Gameplay Chronicles: Unveiling Digital Realms” is a captivating blog that offers readers a deeper insight into the fascinating world of gaming. Whether you’re a casual gamer, a dedicated player, or someone who’s just curious about the gaming universe, this blog has something to offer. Here are some details about what you can expect from this blog:
        </p>
        
        <h3 className='font-bold text-2xl text-white mt-2'>1. Game Reviews and Analysis:</h3>
        <p className='text-gray-500 mt-3'>Gameplay Chronicles” provides in-depth game reviews and analysis, helping you discover new games, understand their mechanics, and make informed decisions about what to play next. From AAA titles to indie gems, we ve got you covered.</p>


        <h3 className='font-bold text-2xl text-white mt-2'>2. Exclusive Interviews:</h3>
        <p className='text-gray-500 mt-3'>Dive into the minds of game developers, designers, and industry professionals through exclusive interviews. Learn about their creative processes, inspirations, and the stories behind your favorite games.</p>


        <h3 className='font-bold text-2xl text-white mt-2'>3. Gameplay Guides and Tips:</h3>
        <p className='text-gray-500 mt-3'> Whether you’re stuck on a challenging level or looking to improve your skills, our blog offers detailed gameplay guides and tips to help you conquer even the toughest in-game challenges.</p>


        <h3 className='font-bold text-2xl text-white mt-2'>4. Gaming Culture and Trends:</h3>
        <p className='text-gray-500 mt-3'>Stay up-to-date with the latest trends, news, and cultural phenomena in the gaming world. We explore the social and cultural impact of gaming, from esports to cosplay and beyond.</p>


        <h3 className='font-bold text-2xl text-white mt-2'>5. Behind-the-Scenes Stories:</h3>
        <p className='text-gray-500 mt-3'>Discover the untold stories behind the development of iconic games. We unveil the secrets, challenges, and triumphs that shaped the games you love.</p>


        <h3 className='font-bold text-2xl text-white mt-2'>6. Community Engagement:</h3>
        <p className='text-gray-500 mt-3'>“Gameplay Chronicles” fosters a sense of community among gamers. Join the conversation, share your thoughts, and connect with fellow gaming enthusiasts in our comment sections and forums.</p>

      </div>
      <div className='w-full lg:max-w-3/10 py-10 bg-black px-5 lg:px-0 '>
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

      </div>
      
    </div>
    </div>
    </>
  )
}

export default page