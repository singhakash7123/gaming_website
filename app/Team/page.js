import React from 'react'
import Banner from '../Banner/page'

import TeamComponent from './TeamComponent/page'
import TeamInfo from './TeamInfo/page'
import TeamData from '../Data/Team.js'
const TeamPage = () => {
  const renderExperts = TeamData?.slice(0,3)?.map((item)=>
   <TeamComponent key={item.id} name={item.name} role={item.role} image={item.image}  />
  )
  const renderTecnical = TeamData?.slice(3)?.map((item)=>
   <TeamComponent key={item.id} name={item.name} role={item.role} image={item.image}  />
  )
  return (
    <>
    <Banner content='TEAM'/>
    <div className='bg-black py-15' data-aos="fade-up">
      <div className='max-w-6xl mx-auto px-5 space-y-35'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'> 
        
         {renderExperts}
          
       </div>

        <TeamInfo/>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'> 
        
         {renderTecnical}
          
       </div>

      </div>
    </div>
    </>
  )
}

export default TeamPage