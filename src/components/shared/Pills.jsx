import React from 'react'

function Pills({content,rotate}) {
  return (
    <div className={`p-2 text-main border-2 transistion-all duration-300 border-main hover:scale-110 hover:'${rotate}'  w-fit`}>
       <p className='text-main'>{content}</p>
    </div>
  )
}

export default Pills