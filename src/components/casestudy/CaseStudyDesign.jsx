import React from 'react'
import Heading from './shared/Heading'
import Button from '../shared/Button'

function CaseStudyDesign() {
  return (
    <section className='bg-[#FFE6DF] py-12 md:mb-20 mb-16'>
        <div className='section-wrapper'>
            <div className='flex justify-center mb-4 md:mb-10'>
            <Heading num={'09'} heading={'FULLFILLING THE SCREENS!'}/>
            </div>
            <div className='mb-12'>
            <div className='w-full mb-8 md:mb-10'>
            <h5>Built for the Himalayas (Letting the user feel it)</h5>
            <p className='text-text md:text-xl!'>I wanted the first interaction to immediately communicate what Mustang Heli stands for. By using a layered parallax hero inspired by Nepal's mountainous landscape and Obv Everest, I created a sense of depth and elevation that reflects the brand's expertise of Flying on the highest parts of the world. Rather than relying on text alone, I used motion to immerse users in the experience from the very first scroll.</p>
        </div>
        <div className='relative w-full h-[300px] md:h-full aspect-video overflow-hidden rounded-2xl'>
            <video autoPlay muted loop playsInline preload="none" className='inset-0 w-full h-full object-cover'> 
                <source src="/profile/project/CaseStudy/MustangHeli/video/proto1.mp4" type="video/mp4"  />
            </video>
        </div>
        </div>
         <div className='mb-12'>
            <div className='w-full mb-8 md:mb-10'>
            <h5>Simplifying Service Discovery</h5>
            <p className='text-text md:text-xl!'>I wanted users to quickly identify the service that best matched their needs, whether they were looking for a scenic tour, private charter, or emergency rescue. By organizing services into clear categories and establishing a strong visual hierarchy, I reduced cognitive load and made navigation more intuitive.</p>
        </div>
        <div className='max-w-full w-full h-[300px] md:h-full rounded-2xl overflow-hidden'>
                <img src="/profile/project/CaseStudy/MustangHeli/homepage1.png" alt="" className='w-full h-full object-cover'/>
            </div>
        </div>
        <div className='mb-12'>
            <div className='w-full mb-8 md:mb-10'>
            <h5>Building Trust </h5>
            <p className='text-text md:text-xl!'>I built trust by designing dedicated service and destination pages that provide comprehensive information before users make an inquiry. Detailed descriptions, key highlights, and transparent helicopter information help users make informed decisions with confidence.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 justify-between relative'>
            <div className='max-w-[620px] w-full h-full max-h-[550px] rounded-2xl overflow-hidden '>
                <img src="/profile/project/CaseStudy/MustangHeli/homepage2.png" alt="wireframe1" className='w-full h-full object-cover'/>
            </div>
             
            <div className='max-w-[620px] w-full  h-full max-h-[550px] rounded-2xl overflow-hidden'>
                <img src="/profile/project/CaseStudy/MustangHeli/homepage3.png" alt="" className='w-full h-full object-contain'/>
            </div>
           
            </div>

    </div>
     <div className='mb-12'>
            <div className='w-full mb-10'>
            <h5>Designing for Emergency Response</h5>
            <p className='text-text md:text-xl!'>I wanted emergency assistance to remain accessible from any page without requiring users to search for contact information. By keeping a persistent emergency button in the navigation and providing a dedicated emergency request form, I reduced the number of steps needed to reach Mustang Heli during time-sensitive situation as well as keeping the form very short.</p>
        </div>
        <div className='max-w-full w-full h-[300px] md:h-full rounded-2xl overflow-hidden'>
                <img src="/profile/project/CaseStudy/MustangHeli/homepage4.png" alt="" className='w-full h-full object-cover'/>
            </div>
        </div>
        <div className='flex justify-center'>
            <Button className={'bg-main'} content={'Visit Live Site'} onClick={()=>window.location.href='https://mustangheli.com/'}/>
        </div>
        </div>
    </section>
  )
}

export default CaseStudyDesign