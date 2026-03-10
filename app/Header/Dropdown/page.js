'use client'
import React , {useState} from 'react'
import Link from 'next/link'
const Dropdown = () => {
    const[show,setShow] = useState(false)
  return (
    <li onMouseEnter={()=>{setShow(true)}} className='font-semibold text-xs   transition-all duration-300 text-white relative'> 
                 PAGES + 
            <ul onMouseLeave={()=>{setShow(false)}} className={`absolute top-full translate-y-2 left-0 space-y-4 bg-black/80 text-left px-5 py-5 ${show?'block':'hidden'}`} >
             <li><Link href={'/About'}>ABOUT</Link></li>
             <li><Link href={'/Team'}>TEAM</Link></li>
             <li><Link href={'/Testimonial'}>TESTIMONIAL</Link></li>
             </ul>
             
              </li>
  )
}

export default Dropdown