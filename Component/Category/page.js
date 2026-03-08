import Link from 'next/link'
import React from 'react'

const Category = ({basepath,categories,style,containerStyle}) => {
  return (
    <div className={` ${containerStyle}  `}>
        <Link className={`${style}`}  href={`${basepath}`}>All</Link>
        {categories?.map(cat =>(
        <Link  key={cat} className={`${style}`} href={`${basepath}/${cat}`}>{cat}</Link>
        ))}
    </div>
  )
}

export default Category