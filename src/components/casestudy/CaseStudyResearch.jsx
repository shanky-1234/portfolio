import React from 'react'
import Avatar from '../shared/Avatar'
import Heading from './shared/Heading'

function CaseStudyResearch() {
  return (
     <section className='section-wrapper md:mb-20 mb-16'>
        <div>
            <div className='flex flex-col md:flex-row justify-between mb-5 md:mb-10'>
            <Heading num={'04'} heading={'RESEARCH'}/>
            <div className='flex-2'>
                <div className='mb-2'>
                    <h5 className=''>Understanding the Users</h5>
                </div>
                <div >
                    <p className='text-text  md:text-xl!'>Target Users are the core part of understanding a project. For Mustang Heli, with the consultation of the client and by discussing with them on what type of customer they get i divided the user category to 
<br/><br/>
<ol type='nums' className='font-bold'>
<li>Tourists / Travelers</li>
<li>Crisis Responders</li>
<li>VIP Clients/ Aviation Service</li>
</ol>
<br/>
BUT... <br/>
With many Services and sub categories to prioritize one type of user and then expand that concept like a Root Forming a Tree
</p>
                </div>
            </div>
        </div>
        <div className='relative mb-5 md:mb-10'>
            <div className='space-y-1'>
            <div className='md:max-w-full min-w-[300px] h-[300px] w-full md:h-full rounded-2xl overflow-hidden'>
                <img src="/profile/project/CaseStudy/MustangHeli/screenshot3.png" alt="" className='w-full h-full object-cover'/>
            </div>
            </div>
            
            <div className='absolute bottom-0 left-0'>
                <Avatar direction={'left'} content={'Dividing the Tourist into two targets '}/>
            </div>
        </div>
        <div className='relative mb-10'>
            <div className='space-y-1'>
            <div className='max-w-full w-full min-w-[300px] h-[300px] md:h-full rounded-2xl overflow-hidden'>
                <img src="/profile/project/CaseStudy/MustangHeli/screenshot4.png" alt="" className='w-full h-full object-contain'/>
            </div>
            </div>
            
            <div className='absolute bottom-0 right-0'>
                <Avatar direction={'right'} content={'Journey Mapping to Understand each type of user in depth'}/>
            </div>
        </div>
        <div className='flex-col items-center flex '>
            <h5 className='mb-4'>Final Key Insights</h5>
            <div className='flex md:gap-8 gap-4 flex-col md:flex-row'>
                <div className='p-4 bg-main rounded-2xl'>
                    <span className=' text-white text-2xl'>TOURISTS ARE THE PRIMARY AIUDIENCE</span>
                </div>
                 <div className='p-4 bg-main rounded-2xl'>
                    <span className=' text-white text-2xl'>EMERGENCY USERS NEED IMMEDIATE ACTION</span>
                </div>
                 <div className='p-4 bg-main rounded-2xl'>
                    <span className=' text-white text-2xl'>USERS ARE ATTRACTED BY IMAGES AND READS LESS TEXT</span>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default CaseStudyResearch