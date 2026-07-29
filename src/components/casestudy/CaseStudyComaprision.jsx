import React from 'react'
import Heading from './shared/Heading'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';


function CaseStudyComaprision() {
  return (
    <section className='md:mb-20 mb-16'>
        <div className='section-wrapper '>
            <div className='flex justify-center md:mb-10'>
            <Heading num={'10'} heading={'FROM LO-FI TO HI-FI'}/>
            </div>
            <div className='w-full mb-8 md:mb-10'>
            <h5>So what changed ?</h5>
            <p className='text-text md:text-xl!'>After Testing with number of users and with the clients. Their requirements extended more and alot of designs needed to be tweaked.</p>
        </div>
        <div>
            <ReactCompareSlider defaultPosition={50} className='max-w-full w-full h-[300px] md:h-full rounded-2xl overflow-hidden'
                itemOne={<ReactCompareSliderImage src='/profile/project/CaseStudy/MustangHeli/before.png'/>}
                itemTwo={<ReactCompareSliderImage src='/profile/project/CaseStudy/MustangHeli/after.png'/>}
            />
        </div>
        </div>
    </section>
  )
}

export default CaseStudyComaprision