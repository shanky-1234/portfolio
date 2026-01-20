import React from 'react'
import Button from './shared/Button'
import { Link } from 'react-router'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap/all'
    import Typewriter from 'typewriter-effect';

function HeroSection() {
    useGSAP(()=>{
        const cartoonTimeline = gsap.timeline({repeat:-1, yoyo:true})
        cartoonTimeline.to('#cartoon',{ y:12, duration:4, rotation:-4, ease:'sine.inOut'})

        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:'.hero-section',
                start:'-50% top',
                end:'+=2000',
                scrub:1.2,
                
            }
        })

        const startTl = gsap.timeline({
            delay:0.5,
        })

        startTl.to('.cartoon-img',{
            opacity:1,
            y:8,
            ease:'power1.inOut'
        }).from('.cursor',{
            opacity:0,
            x:100,
            ease:'power1.in',
            duration:0.5
        })

        tl.to('.cursor',{
            rotate:-85,
            y:100,
            ease:'power1.inOut'
        }).to('.stack',{
            y:100,
            rotate:50,
            ease:'power1.inOut',
            delay:1,
            stagger:1.5
        })
    })
    const handleResume = ()=>{
        window.open(
    "/profile/resume/shashank.pdf",
    "_blank",
    "noopener,noreferrer"
  );
    }
  return (
    <>
    <section id="aboutme"className='mx-20  relative md:mt-45 lg:mt-40 mt-40 hero-section cartoon-img opacity-0  '>
        <div className='absolute -z-20 inset-0 justify-center flex items-center'>
            <div className='md:w-125 md:h-125 w-200 h-200 '>
            <img src="/profile/graph-background.png" alt="background" className='w-full h-full object-contain'/>
            </div>
        </div>
        <div className='z-20 inset-0 gap-8 md:-gap-20 flex flex-col text-center md:text-left md:flex-row justify-center items-center md:items-end-safe'>
            <div className='lg:w-80 w-60 md:w-70  -rotate-4 flex flex-col justify-center items-center'>
            <h3 className='font-display text-center text-3xl'>This is me!</h3>
            <img src="/profile/cartoon.png" alt="cartoon" className='w-full h-full' id='cartoon' />
            <Link to='https://www.linkedin.com/in/shashank-tuladhar-0a4b93275/' className=' hidden md:flex gap-2'><img src="/profile/linkedIn.svg" alt="" /><span className='font-display text-xl'>IRL Me Here!</span></Link>
            </div>
            <section className='w-fit relative'>
                <div className='flex flex-col justify-center md:items-start items-center'>
                  
                    <div className='flex relative '>
                      <div className='cursor w-10 inset-20 -translate-y-10 absolute md:-translate-y-10 translate-x-20 md:-translate-x-30 rotate-90 md:-rotate-15'>
                <img src="/profile/Cursor.png" alt="" className='w-full object-contain '/>
            </div>
            <div className='flex flex-col justify-center gap-2'>
            <h3 className='text-left text-xl md:text-2xl'>
                    Wassup, I am
            </h3>
            <div className='p-3 md:p-4 bg-main rounded-3xl  md:w-fit sm:w-fit border-6 border-secondary'>
                <h1 className='text-2xl md:text-[28px] lg:text-4xl font-black tracking-tight text-center text-white'>Shashank Tuladhar</h1>
            </div>
            </div>
            </div>
            <h4 className='font-display text-2xl md:text-3xl mt-4'>
            <Typewriter options={{strings:['UI/UX Designer','Web Developer','Graphics Designer'],autoStart:true,loop:true,}}/>
            </h4>
            
            <div className='flex flex-row lg:items-center items-start mt-2  md:gap-2'>
                <img src="/profile/figma-logo.svg" alt="" /><span className='text-[16px]'>I <span className='text-main font-semibold'>design things</span> that make sense, and then <span className='font-semibold text-main'>&lt;&gt; I code &lt;/&gt;</span></span>
            </div>
            <div className='mt-4'>
            <Button content={'Resume'} onClick={handleResume} />
            </div>
            </div>
            </section>
            <div className='w-60 hidden lg:block stack'>
                <h3 className='font-display text-3xl -rotate-10'>My Stack</h3>
                <img src="/profile/stack.png" alt="" />
            </div>
        </div>
    </section>
     <div className='mt-6 md:w-[80vw] w-[80vw] xs:w-[60vw] mx-auto flex justify-center items-center lg:hidden'>
                <img src="/profile/stack_mobile.png" alt="stackmobile" />
        </div>
        </>
  )
}

export default HeroSection