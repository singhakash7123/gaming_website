
import React from 'react'
import Banner from '../Banner/page.js'
import List from './List/page.js'
import array from '../Data/PortFolio.js'
import Category from '../../Component/Category/page.js'
const PortFolio = async ({params}) => {
 
  const category = [ ...new Set(array.map(item=>item.category))]
  const {GameFilter} = await params
  const filtered = array.filter((item)=>{
   
    if(GameFilter) return item.category === GameFilter ;
    else return true
  })

 const RenderLists = filtered.map((item)=>
  <List key={item.id} content={item.name} image={item.image} category={item.category} />
)
  
  return (
    <section className='bg-gray-900'>
      <Banner content={'PORTFOLIO'}/>
    <div className='w-full max-w-7xl mx-auto bg-gray-900 '>
    <div className=' w-full max-w-6xl mx-auto  py-5 flex items-center justify-center gap-x-5 text-xs md:text-sm text-white '>
      {/* {gameCategory} */} <Category basepath={'/PortFolio'} categories={category} style={'uppercase border-2 border-gray-400 hover:bg-purple-500 hover:text-white hover:border-white p-2 rounded-xl'} containerStyle='flex items-center justify-center gap-8' />
       </div>
       <ul className=' w-full grid max-w-2xl md:max-w-none mx-auto  grid-cols-1 md:grid-cols-3 gap-8 mt-8 px-8'>
       
        {RenderLists}
       </ul>
    </div>
    </section>
  )
}

export default PortFolio