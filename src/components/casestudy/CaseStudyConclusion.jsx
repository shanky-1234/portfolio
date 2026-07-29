import React from 'react'
import Heading from './shared/Heading'

function CaseStudyConclusion() {
  return (
     <section className='md:mb-20 mb-16'>
        <div className='section-wrapper '>
            <div className='flex justify-center md:mb-10'>
            <Heading num={'11'} heading={'IN CONLUSION'}/>
            </div>
        <div className='flex md:flex-row flex-col gap-4 md:gap-8'>
             <div className='p-4 bg-main rounded-2xl w-full'>
                    <h4 className='text-white'>BEYOND THE INTERFACE</h4>
                    <p className='text-white'>Throughout this project, I learned that thoughtful information architecture and purposeful interactions are just as important as visual design. Every design decision should solve a user need while supporting the business goal.</p>
                </div>
                 <div className='p-4 bg-main rounded-2xl w-full'>
                    <h4 className=' text-white text-2xl'>NOT ONLY ONE TARGET USER AT TIMES</h4>
                    <p className='text-white'>Sometimes project requires users that comes from different background. These type of users and their behavior and goal can infinite. Segmentation of these users into different parts is the most important before even making the sitemaps.</p>
                </div>
        </div>
        </div>
    </section>
  )
}

export default CaseStudyConclusion