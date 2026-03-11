import React from 'react'
import Banner from '../Banner/page'
import TeamComponent from '../Team/TeamComponent/page'
import TestimonialInfo from '../Testimonial/TestimonialInfo/page'
import TestimonailData from '../Data/Testimonial.js'
import TeamData from '../Data/Team.js'
const About = () => {
   const RenderTestimonial = TestimonailData?.map(Item =>
     <TestimonialInfo key={Item.id} name={Item.name} image={Item.image} content={Item.content} />
  )
  const renderExperts = TeamData?.slice(0,3)?.map((item)=>
   <TeamComponent key={item.id} name={item.name} role={item.role} image={item.image}  />
  )
  return (
    <>
   <Banner content='ABOUT US' />
   <div className='bg-black py-15' data-aos="fade-up">
      <div className='max-w-6xl mx-auto px-5 space-y-35'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'> 
        {renderExperts}
          
       </div>

        <div className='max-w-6xl grid grid-col-1 md:grid-cols-2 mx-auto gap-8 place-items-center px-3 ' >
    {RenderTestimonial}
   </div>

      </div>
    </div>
    </>
  )
}

export default About