import React from 'react'

function JobCard({office,time,position}) {
  return (
    <div className="bg-secondary sm:p-4 p-2 rounded-xl md:rounded-3xl text-white lg:w-[40vw] h-full">
            <div className='flex-center flex-row gap-8 lg:gap-0 justify-between'>
                <div className='flex flex-col items-start'>
              <div className='flex flex-row items-end gap-2'>
                <h4 className="md:text-xl text-[16px] font-bold">{office}</h4>
                </div>
                <div>
                    <span className='font-secondary text-sm te'>{time}</span>
                </div>
                </div>
                <div>
                    <h3 className='text-[16px] sm:text-2xl font-bold'>{position}</h3>
                </div>
            </div>
          </div>
  )
}

export default JobCard