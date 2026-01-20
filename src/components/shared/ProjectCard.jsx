import React from 'react'
import Badge from './Badge'
import { MoveRight } from 'lucide-react'
import { useNavigate } from 'react-router'

function ProjectCard({ color, project,description,img1,img2,badges,link}) {
  const handleClick = () => {
  window.open("https://mitrasamaj.org/", "_blank", "noopener,noreferrer");
};
  return (
    <section className='bg-secondary w-full h-[80vh] md:h-[90vh] lg:h-[70vh] rounded-2xl overflow-hidden flex flex-col lg:flex-row inset-shadow-2xs cursor-pointer  project-card relative sm:items-center group' onClick={handleClick}>
      <div className='lg:w-1/2 w-full px-4 lg:pl-8 py-8 flex flex-col md:justify-center h-screen'>
        <h3 className='font-main text-white font-bold md:text-3xl text-2xl text-left'>
          {project}
        </h3>

        <div className='flex flex-row gap-4 mt-2 flex-wrap'>
          {badges.map((item,index)=>{
            return(
              <Badge key={index} content={item} />
            )
          })}
        </div>

        <p className='mt-4 font-secondary text-white md:text-[16px] text-sm text-left'>
         {description}
        </p>
        <div className='flex justify-start mt-4'>
          <button className='group absolute text-white text-sm font-light flex gap-2 items-center'>
            <span className='text-sm transition-transform duration-300 group-hover:-translate-x-2 text-main'>
              More Info
            </span>
            <MoveRight
              size={16}
              className='transform translate-x-6 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100'
            />
          </button>
        </div>
      </div>

      <div style={{backgroundColor:color}} className={`overflow-hidden lg:w-1/2 w-full relative flex items-center justify-center rounded-b-2xl lg:rounded-b-none lg:rounded-r-2xl p-8 min-h-100 lg:min-h-full`}>
        <div className='relative md:w-full md:h-full w-500 translate-y-0 lg:translate-y-25 flex items-end justify-center'>
          <img
            src={img1}
            loading='eager'
            className='md:w-[80%] w-full h-full relative z-2 object-contain transition-all duration-300 group-hover:-rotate-4'
          />
          <img
            src={img2}
            loading='eager'
            className='absolute w-[80%] h-[80%] z-1 object-contain right-0 bottom-0 group-hover:rotate-4 transition-all duration-300'
          />
        </div>
      </div>
    </section>
  )
}

export default ProjectCard
