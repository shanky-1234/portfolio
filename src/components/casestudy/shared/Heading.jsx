import React from 'react'

function Heading({num,heading}) {
  return (
            <div className='flex gap-2 flex-3 h-fit items-center mb-4 md:mb-0'>
                <div className='bg-main rounded-full items-center flex justify-center p-4 w-16 h-16'>
                    <h3 className='text-white text-5xl! md:text-6xl'>{num}</h3>
                </div>
                <h3 className='text-main'>
                    {heading}
                </h3>
            </div>

  )
}

export default Heading