import React from 'react'

function GalleryCard({src}) {
  return (
    <div className='w-full max-w-[90vw] min-w-0 md:w-[800px] md:aspect-[5/5] rounded-2xl overflow-hidden'>
      <img
      loading='eager'
        src={src}
        alt="design"
        className='w-full h-full object-cover rounded-2xl transition-all duration-200 hover:scale-105'
      />
    </div>
  )
}

export default GalleryCard
