import React from 'react'

function JobCard({office,time,position,src,id}) {
  return (
    <div id={id} className="bg-white sm:p-4 p-2 rounded-xl md:rounded-3xl text-main lg:w-[40vw] h-full">
            <div className='flex-center flex-row gap-8 lg:gap-0 justify-between'>
                <div className='flex flex-col items-start'>
              <div className='w-[150px] h-[100px]'>
                <img src={src} alt={`${office}`} className='w-full h-full object-contain'/>
                </div>
                <div>
                    <span className='font-secondary text-sm te'>{time}</span>
                </div>
                </div>
                <div>
                    <h4 className='text-[16px] sm:text-2xl font-bold'>{position}</h4>
                </div>
            </div>
          </div>
  )
}

export default JobCard