import React from 'react'
import Heading from './shared/Heading'

function CaseStudyWireframe() {
  return (
     <section className='md:mb-20 mb-16'>
        <div className='section-wrapper'>
            <div className=' mb-4 md:mb-10'>
           <Heading num={'09'} heading={'WIREFRAME'}/>
           </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 justify-between relative'>
            <div className='max-w-[620px] w-full h-full max-h-[550px] rounded-2xl overflow-hidden '>
                <img src="/profile/project/CaseStudy/MustangHeli/wireframe1.png" alt="wireframe1" className='w-full h-full object-cover'/>
            </div>
             
            <div className='max-w-[620px] w-full  h-full max-h-[550px] rounded-2xl overflow-hidden'>
                <img src="/profile/project/CaseStudy/MustangHeli/wireframe2.png" alt="" className='w-full h-full object-contain'/>
            </div>

            <div className='max-w-[620px] w-full h-full rounded-2xl overflow-hidden'>
                <img src="/profile/project/CaseStudy/MustangHeli/wireframe3.png" alt="" className='w-full h-full object-contain'/>
            </div>

            <div className='max-w-[620px] w-full h-full rounded-2xl overflow-hidden'>
                <img src="/profile/project/CaseStudy/MustangHeli/wireframe4.png" alt="" className='w-full h-full object-contain'/>
            </div>
           
            </div>

    </div>
    </section>
  )
}

export default CaseStudyWireframe