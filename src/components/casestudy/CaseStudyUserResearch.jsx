import React from 'react'
import Avatar from '../shared/Avatar'
import Heading from './shared/Heading'

function CaseStudyUserResearch() {
  return (
    <section className='section-wrapper mb-15'>
        <div>
            <div className='flex flex-col md:flex-row justify-between md:mb-8 mb-10'>
            <div className='flex gap-2 flex-3 h-fit items-center'>
               <Heading num={'05'} heading={'USER JOURNEY'}/>
            </div>
            <div className='flex-2'>
                <div className='mb-2'>
                    <h5 className=''>Different User, Common Goal</h5>
                </div>
                <div >
                    <p className='text-text md:text-xl!'>After segmenting, the users and mapping the journey, Simplyfying the flow was made more simpler just like the goal i had on my mind</p>
                </div>
            </div>
        </div>
        <div className='relative mb-10'>
            <div className='space-y-1'>
            <div className='max-w-full w-full h-[300px] md:h-full rounded-2xl overflow-hidden'>
                <img src="/profile/project/CaseStudy/MustangHeli/screenshot5.png" alt="" className='w-full h-full object-cover'/>
            </div>
            </div>
            
            <div className='absolute bottom-0 left-0'>
                <Avatar direction={'left'} content={'Trying to integrate all the necessary information including safety, transportation. '}/>
            </div>
        </div>

    </div>
    </section>
  )
}

export default CaseStudyUserResearch