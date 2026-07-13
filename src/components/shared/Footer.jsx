import React from 'react'
import { Link } from 'react-router'
import Button from './Button'

function Footer() {
  return (
   <footer className="section-wrapper bg-main rounded-2xl overflow-hidden">
  <div className="px-6 md:px-10 py-10 md:py-12">
    <div className="flex flex-col md:flex-row justify-between gap-8 mb-4">
      <h2 className="text-white leading-none">
        LET&apos;S BUILD <br />
        TOGETHER
      </h2>
      <div className="space-y-8 md:space-y-4">
        <div className='space-y-2'>
        <p className="font-secondary  text-white">
          I am always open for projects.
        </p>
        
          <Button content={"Contact Me"} className={'w-full bg-white text-main'}/>
      </div>
  
          <div className='flex gap-8 md:gap-8 flex-row w-full'>
            <div className='w-8 h-8 md:w-10 md:h-10 hover:scale-110 transition-all duraition-300'>
            <a href='https://www.instagram.com/shashank_tuladhar/?hl=en' target='_blank' rel="noopener noreferrer">
            <img src="/profile/instagram.svg" alt="instagram" className='w-full h-full' />
            </a>
            </div>
           
            <div className='w-8 h-8 md:w-10 md:h-10 hover:scale-110 transition-all duraition-300'>
             <a href='https://www.linkedin.com/in/shashank-tuladhar-0a4b93275/' target='_blank' rel="noopener noreferrer">
            <img src="/profile/linkedin-white.svg" alt="linkedin" className='w-full h-full' />
           </a>
            </div>
            <div className='w-8 h-8 md:w-10 md:h-10 hover:scale-110 transition-all duraition-300'>
            <a href='https://github.com/shanky-1234' target='_blank' rel="noopener noreferrer">
            <img src="/profile/github-white.svg" alt="github" className='w-full h-full' />
            </a>
            </div>
            <div className='w-8 h-8 md:w-10 md:h-10 hover:scale-110 transition-all duraition-300'>
            <a href='https://www.behance.net/shashantuladha' target='_blank' rel="noopener noreferrer"
            >
            <img src="/profile/behance-white.svg" alt="behnace" className='w-full h-full' />
            </a>
            </div>
        </div>
        
      </div>
    </div>
    <div>
      <span className='text-white font-secondary text-sm'>Designed and Developed By <span className='font-bold'>Shashank Tuladhar</span></span>
    </div>
   
  </div>
</footer>
  )
}

export default Footer