import React from 'react'

function StickyNote({ref}) {
  return (
     <div ref={ref} className="absolute md:right-[-50px] md:bottom-[-50px] lg:left-[-80px] hidden sm:block z-30 lg:top-[20px] sticky-note lg:w-full lg:h-full max-w-[230px] max-h-[240px] min-w-[180px] min-h-[220px]">
          <div className="px-6 py-6 space-y-8">
            <div className="flex gap-4">
            <span className="font-decorative text-white text-xl">Design</span>
          
          <div className="border-1 border-white w-full h-[30px] ">
            <div className="bg-white w-full h-full flex justify-center items-center">
                  <span className="font-decorative text-black">100%</span>
            </div>
          </div>
          </div>
          <div className="flex gap-4">
            <span className="font-decorative text-white text-xl">Coding</span>
          
          <div className="border-1 border-white w-full h-[30px] ">
             <div className="bg-white w-[80%] h-full flex justify-center items-center">
                  <span className="font-decorative text-black">80%</span>
            </div>
          </div>
          </div>
          <div className="flex gap-4">
            <span className="font-decorative text-white text-xl">Sleep</span>
          
          <div className="border-1 border-white w-full h-[30px] ">
            <div className="bg-white w-[50%] h-full flex justify-center items-center ">
                  <span className="font-decorative text-black ">20%</span>
            </div>
          </div>
          </div>
          
        </div>
        <div className='absolute bottom-2 right-20'>
            <span className='font-secondary text-xs text-white'>Drag Me!</span>
          </div>
        </div>
  )
}

export default StickyNote