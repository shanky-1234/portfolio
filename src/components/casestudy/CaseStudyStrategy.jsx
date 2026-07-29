import React from 'react'
import Avatar from '../shared/Avatar'
import Heading from './shared/Heading'

function CaseStudyStrategy() {
  return (
        <section className='mb-16 md:mb-20'>
        <div className='section-wrapper'>
            <div className='flex flex-col md:flex-row justify-between mb-10'>
            <div className='flex gap-2 flex-3 h-fit items-center'>
               <Heading num={'06'} heading={'STRATEGY'}/>
            </div>
            <div className='flex-2'>
                <div className='mb-2'>
                    <h5 className=''>Simple Sitemap</h5>
                </div>
                <div >
                    <p className='text-text text-xl!'></p>
                </div>
            </div>
        </div>
        <div className='relative mb-10'>
            <div className='space-y-1'>
            <div className='max-w-full w-full h-[300px] md:h-full rounded-2xl overflow-hidden'>
                <img src="/profile/project/CaseStudy/MustangHeli/screenshot6.png" alt="" className='w-full h-full object-cover'/>
            </div>
            </div>
            
            <div className='absolute bottom-0 right-0'>
                <Avatar direction={'right'} content={'Represented Each Different flows so client is more clear on the concept'}/>
            </div>
        </div>

    </div>
    </section>
  )
}

export default CaseStudyStrategy