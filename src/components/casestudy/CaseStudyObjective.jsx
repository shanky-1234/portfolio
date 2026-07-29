import React from 'react'
import Avatar from '../shared/Avatar'
import Heading from './shared/Heading'

function CaseStudyObjective() {
  return (
    <section className='mb-16 md:mb-20'>
        <div className='section-wrapper'>
            <div className='flex flex-col md:flex-row justify-between mb-5 md:mb-10'>
            <Heading num={'02'} heading={'PROJECT OBJECTIVE'}/>
            <div className='flex-2'>
                <div className='mb-2'>
                    <h5 className=''>Combining Tourism, Aviation and Emergency into a clear visual storytelling for conversion.</h5>
                </div>
                <div >
                    <p className='text-text md:text-xl!'>The project aimed to transform Mustang Heli's online presence into a modern, trustworthy, and conversion-focused platform through compelling visual storytelling. By prioritizing immersive imagery over lengthy text, <b>the design communicates the brand's expertise while simplifying service discovery and providing frictionless access to emergency contact when every second matters.
</b></p>
                </div>
            </div>
        </div>
        <div className='flex justify-between relative md:flex-row flex-col gap-4'>
            <div className='space-y-1'>
            <div className='max-w-[620px] h-full rounded-2xl overflow-hidden'>
                <img src="/profile/project/CaseStudy/MustangHeli/screenshot1.png" alt="" className='w-full h-full object-contain'/>
            </div>
            </div>
             <div className='space-y-2'>
            <div className='max-w-[620px] h-full rounded-2xl overflow-hidden'>
                <img src="/profile/project/CaseStudy/MustangHeli/screenshot2.png" alt="" className='w-full h-full object-contain'/>
            </div>
            </div>
            <div className='absolute bottom-0 right-0'>
                <Avatar content={'My Motto I noted down.!'}/>
            </div>
        </div>

    </div>
    </section>
  )
}

export default CaseStudyObjective