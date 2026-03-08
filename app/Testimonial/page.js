import React from 'react'
import Banner from '../Banner/page'
import TestimonialInfo from './TestimonialInfo/page'
import TestimonailData from  '../Data/Testimonial.js'
const TestimonialPage = () => {
  const RenderTestimonial = TestimonailData?.map(Item =>
     <TestimonialInfo key={Item.id} name={Item.name} image={Item.image} content={Item.content} />
  )
  return (
    <>
   <Banner content='Testimonials' />
   <div className='bg-black py-15'>
    <div className='max-w-6xl grid grid-col-1 md:grid-cols-2 mx-auto gap-8 place-items-center px-3 ' >
   
   {RenderTestimonial}
   {RenderTestimonial}
    
   
   </div>
   </div>
    </>
  )
}

export default TestimonialPage