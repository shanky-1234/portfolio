import React from 'react'
import Button from './shared/Button'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'

function Cta() {
  useGSAP(()=>{
    const tl = gsap.timeline({repeat:-1, yoyo:true})
        tl.to('#cursor',{ yPercent:-10,duration:3,rotate:-4, ease:'sine.inOut'})
      
    })
  return (
    <section className='md:mx-20 mx-8 relative flex-col items-center flex justify-center d:mt-20 mt-10 text-center h-fit'>
                  <div className='flex justify-center w-full lg:w-1/2 h-50 items-center '>
                       <h1 className="text-4xl  tracking-tight absolute flex justify-center font-bold text-main">
          Let’s Build Something Together !
        </h1>
                                  <img src="/profile/selection_purple.svg" alt="" className='w-full h-full object-contain hidden md:block' />
                 <img src="/profile/selection_purple_mobile.svg" alt="" className='w-full h-full object-contain  md:hidden block' />
                </div>
        <div className='md:-mt-10 mt-0'>
          <Button content={"Let's Build"}/>
        </div>
        <div id='cursor'   className="
    w-fit h-fit
    flex items-center gap-2
    relative
    md:absolute
    translate-x-0
    md:translate-x-70
  ">
        <div className='w-10 h-10 '>
          <img src="/profile/Cursor.png" alt="cursor" className='w-full'/>
        </div>
        <div className='px-4 py-2 bg-secondary rounded-4xl'>
            <p className='text-white'>You and Me</p> 
        </div>
        </div>
        
    </section>  
  )
}

export default Cta