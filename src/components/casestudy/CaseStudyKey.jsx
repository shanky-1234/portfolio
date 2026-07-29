import React from 'react'
import Avatar from '../shared/Avatar'
import Heading from './shared/Heading'

function CaseStudyKey() {
  return (
        <section className='mb-16 md:mb-20'>
        <div className='section-wrapper'>
            <div className='flex flex-col md:flex-row justify-between mb-4 md:mb-10'>
            <div className='flex gap-2 flex-3 h-fit items-center'>
                <Heading num={'07'} heading={'KEY METRICS'}/>
            </div>
        </div>
        <div className='relative'>
            <div className='flex md:flex-row flex-col items-start md:justify-between pb-6 mb-10 border-b-1 border-text/30'>
                <h4 className='text-main'>INQUIRY CONVERSION RATE</h4>
                <p className='md:w-1/3 w-full md:text-xl! text-text'>Increase the percentage of visitors who submit an inquiry. (%)</p>
            </div>
            <div className='flex items-start flex-col md:justify-between md:flex-row pb-6 mb-10 border-b-1 border-text/30'>
                <h4 className='text-main'>ENGAGEMENT</h4>
                <p className='w-full md:w-1/3 md:text-xl! text-text'><ol className='list-disc space-y-2'>
                    <li>Average session duration</li>
                    <li>Pages per Session</li>
                    <li>Scroll Depth on the main landing page</li>
                    </ol></p>
            </div>
             <div className='flex items-start flex-col md:justify-between md:flex-row pb-6 mb-10 border-b-1 border-text/30'>
                <h4 className='text-main '>MOBILE EXPEREINCES</h4>
                <p className='w-full md:w-1/3 md:text-xl! text-text'><ol className='list-disc space-y-2'>
                    <li>Mobile bounce rate</li>
                    <li>Mobile Inquiry Conversion</li>
                    </ol></p>
            </div>
        </div>

    </div>
    </section>
  )
}

export default CaseStudyKey