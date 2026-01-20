import React from 'react'

function Pills({content,rotate}) {
  return (
    <div className={`p-2 text-main border-2 transistion-all duration-300 border-main hover:bg-main hover:text-white hover:scale-110 hover:'${rotate}' rounded-2xl w-fit`}>
       <p className='text-xs md:text-sm'>{content}</p>
    </div>
  )
}

export default Pills