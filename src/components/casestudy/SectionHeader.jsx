import React from 'react'

function SectionHeader() {
  return (
    <div className='section-wrapper flex'>
        <div className='flex-2'>
        <h1 className='leading-none'>
            FROM SKY TO SCREEN: THE MUSTANG HELICOPTER WEBSITE
        </h1>
        </div>
        <div className='flex-1 hidden lg:block'>
            <span className='font-secondary text-[200px] tracking-[-2%] font-black text-main opacity-20'>
                #01
            </span>
        </div>
    </div>
  )
}

export default SectionHeader