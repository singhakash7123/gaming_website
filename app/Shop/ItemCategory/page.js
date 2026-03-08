'use client'
import React from 'react'

const ItemCategory = ({content}) => {
  return (
    <li className=' hover:text-purple-500 mt-4 w-full text-lg' > <button  >{content}</button> </li>
  )
}

export default ItemCategory