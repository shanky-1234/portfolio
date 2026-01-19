import React from 'react'
import { Link } from 'react-router'
function ExtraLink() {
  return (
   <section className='mt-4 md:mt-8 lg:mt-8 z-50 relative'>
         <div className='space-y-2'>
            <h1 className='font-display text-xl text-center '>More Stuff On</h1>
            <div className='flex justify-center gap-8'>
            <Link to='https://github.com/shanky-1234' className='flex gap-2 cursor-pointer group'><img src="/profile/github.svg" alt="gihub" className='group-hover:rotate-5 transistion-all duration-300 group-hover:scale-120' />
            <span className='font-display text-[16px]'>Shanky-1234</span>
            </Link>
            <Link to='https://www.behance.net/shashantuladha'className='flex gap-2 w-fit h-fit'><img src="/profile/behance.svg" alt="behance" className='group-hover:rotate-5 transistion-all duration-300 group-hover:scale-120'/>
            <span className='font-display text-[16px]'>Shashank Tuladhar</span>
            </Link>
            </div>
            </div>
    </section> 
  )
}

export default ExtraLink