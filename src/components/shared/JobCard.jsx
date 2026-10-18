import React from 'react'

function JobCard({office,time,position,src,id,link}) {
  const cardContent = (
    <div className="flex flex-row items-center justify-between gap-4 sm:p-4 p-2 rounded-xl md:rounded-3xl text-main">
      <div className='flex flex-col items-start'>
        <div className='w-[150px] h-[100px]'>
          <img src={src} alt={`${office} logo`} className='w-full h-full object-contain'/>
        </div>
        <span className='font-secondary text-sm'>{time}</span>
      </div>
      <div className='text-right'>
        <h4 className='text-[16px] sm:text-2xl font-bold'>{position}</h4>
      </div>
    </div>
  )

  return (
    link ? (
      <a
        id={id}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${office} website (opens in a new tab)`}
        className="group block w-full h-full rounded-xl md:rounded-3xl bg-white transition duration-300 ease-out hover:-translate-y-2 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-main"
      >
        {cardContent}
      </a>
    ) : (
      <div id={id} className="group w-full h-full rounded-xl md:rounded-3xl bg-white transition duration-300 ease-out hover:-translate-y-2 hover:shadow-xl">
        {cardContent}
      </div>
    )
  )
}

export default JobCard