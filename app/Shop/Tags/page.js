import React from 'react'

const Tags = ({content}) => {
  return (
     <button className='hover:bg-purple-500 hover:text-white text-gray-400 font-extrabold border border-gray-400 p-2 text-sm rounded-3xl ' >{content}</button>
  )
}

export default Tags