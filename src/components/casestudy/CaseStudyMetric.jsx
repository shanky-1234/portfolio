import React from 'react'

function CaseStudyMetric() {
  return (
    <section className='section-wrapper mb-16 md:mb-20'>
        <div className='bg-[#FFE6DF] rounded-2xl px-8 py-8'>
            <div className='flex md:justify-between items-center justify-center  gap-4 md:gap-8 flex-col md:flex-row flex-wrap'>
                <div className='flex flex-col justify-center items-center md:items-start'>
                    <p className='text-text'>Duration</p>
                    <h4 className='text-main'>NOV 2025 - JAN 2026</h4>
                </div>
                <div className='flex flex-col justify-center items-center md:items-start'>
                    <p className='text-text'>My Rule</p>
                    <h4 className='text-main'>UI/UX DESIGNER</h4>
                </div>
                <div className='flex flex-col justify-center items-center md:items-start'>
                    <p className='text-text'>Client</p>
                    <h4 className='text-main'>MUSTANG HELICOPTER</h4>
                </div>
                <div className='flex flex-col justify-center items-center md:items-start'>
                    <p className='text-text'>Tools Used</p>
                    <div className='w-10'>
                        <img src="/profile/icons/image%202.png" alt="figma" className='w-full h-full object-contain'/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CaseStudyMetric