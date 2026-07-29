import React from 'react'

function Avatar({direction,content}) {
  return (
    <div className={`flex items-center ${direction === 'left'? 'flex-row' : 'flex-row-reverse'}`}>
        <div className='md:w-20 md:h-20 w-14 h-14 rotate-6'>
            <img src="/profile/profile-smile.png" alt="" className='w-full h-full object-contain'/>
        </div>
        <div className='bg-main  rounded-xl p-2 '>
            <span className='font-bold font-secondary  text-xs md:text-sm text-white '>{content}</span>
        </div>
    </div>
  )
}

export default Avatar