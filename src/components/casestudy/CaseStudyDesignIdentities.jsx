import React from 'react'
import Avatar from '../shared/Avatar'
import Heading from './shared/Heading'

function CaseStudyDesignIdentities() {
  return (
     <section className='mb-16 md:mb-20'>
        <div className='section-wrapper'>
            <div className='flex flex-col md:flex-row justify-between mb-4 md:mb-10'>
            <div className='flex gap-2 flex-3 h-fit items-center'>
               <Heading num={'08'} heading={'DESIGN SYSTEM'}/>
            </div>
        </div>
        <div className='flex flex-col md:flex-row gap-4 md:justify-between relative'>
            <div className='space-y-1 relative'>
            <div className='max-w-[620px] h-full rounded-2xl overflow-hidden'>
                <img src="/profile/project/CaseStudy/MustangHeli/designsystem2.png" alt="" className='w-full h-full object-contain'/>
            </div>
           
           
            </div>
             <div className='space-y-2'>
            <div className='max-w-[620px] h-full rounded-2xl overflow-hidden'>
                <img src="/profile/project/CaseStudy/MustangHeli/designsystem1.png" alt="" className='w-full h-full object-contain'/>
            </div>
           
            </div>
        </div>

    </div>
    </section>
  )
}

export default CaseStudyDesignIdentities