import React from 'react'

function Badge({content}) {
  return (
    <div className='p-2 bg-main text-white rounded-4xl w-fit'>
       <p className='text-xs md:text-sm'>{content}</p>
    </div>
  )
}

export default Badge