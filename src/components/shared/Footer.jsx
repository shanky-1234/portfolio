import React from 'react'
import { Link } from 'react-router'

function Footer() {
  return (
    <footer className="lg:px-20 md:px-10 px-8 relative md:mx-30 h-1/2 mx-8 py-6 md:py-12 overflow-hidden mb-20 md:mt-20 mt-10 rounded-4xl bg-secondary">
    <div className='flex flex-col md:flex-row justify-between '>
    <div className='w-full h-full absolute inset-0 z-0'>
    <img src='profile/graph_footer.svg' className='w-full h-full object-cover'/>
    </div>
      <h1 className="font-[700] text-5xl lg:text-8xl text-main leading-none">
        LET'S <br />
        CONNECT
      </h1>
      <div className='mt-4 flex flex-col z-1'>
        <div className='flex gap-8 md:gap-8 flex-row w-full'>
            <div className='w-8 h-8 md:w-10 md:h-10 hover:scale-110 transition-all duraition-300'>
            <Link to='https://www.instagram.com/shashank_tuladhar/?hl=en'>
            <img src="/profile/instagram.svg" alt="instagram" className='w-full h-full' />
            </Link>
            </div>
           
            <div className='w-8 h-8 md:w-10 md:h-10 hover:scale-110 transition-all duraition-300'>
             <Link to='https://www.linkedin.com/in/shashank-tuladhar-0a4b93275/'>
            <img src="/profile/linkedin-white.svg" alt="linkedin" className='w-full h-full' />
           </Link>
            </div>
            <div className='w-8 h-8 md:w-10 md:h-10 hover:scale-110 transition-all duraition-300'>
            <Link to='https://github.com/shanky-1234'>
            <img src="/profile/github-white.svg" alt="github" className='w-full h-full' />
            </Link>
            </div>
            <div className='w-8 h-8 md:w-10 md:h-10 hover:scale-110 transition-all duraition-300'>
            <Link to='https://www.behance.net/shashantuladha'>
            <img src="/profile/behance-white.svg" alt="behnace" className='w-full h-full' />
            </Link>
            </div>
        </div>
        <p className='font-secondary text-white mt-4'>tuladharshashank11@gmail.com</p>
      </div>
      </div>
      <span className='w-full mt-4 text-white text-[12px] text-left md:text-center'>Made with 💪 by Shashank Tuladhar</span>
    </footer>
  )
}

export default Footer