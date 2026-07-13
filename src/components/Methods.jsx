import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React from 'react'

function Methods() {

    useGSAP(()=>{
        let splitText = SplitText.create('.heading',{
            type:'words'
        })


        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:"#methods",
                markers:false,
                start:"-80% top",
                end:"bottom",
                once:true
            }
        })

        tl.from('#paragraphs',{
            yPercent:100,
            opacity:0,
            filter: 'blur(10px)',
            stagger:0.6,
            ease:'power1.inOut'
        },0.3)

        tl.from('#card-1',{
            yPercent:100,
            opacity:0,
            filter: 'blur(10px)',
            stagger:0.2,
            ease:'power1.inOut'
        },0.5)

        tl.from('#card-2',{
            yPercent:100,
            opacity:0,
            filter: 'blur(10px)',
            stagger:0.8,
            ease:'power1.inOut'
        },0.7)

             tl.from('#card-3',{
            yPercent:100,
            opacity:0,
            filter: 'blur(10px)',
            stagger:0.3,
            ease:'power1.inOut'
        },0.3)

        gsap.from(splitText.words,{
            yPercent:100,
            opacity:0,
            stagger:0.1,
            ease:'power4.out',
            duration:0.6,
            scrollTrigger:{
                trigger:'#methods',
                start:"-80% top",
            }
        })
    },[])
  return (
    <section id='methods' className='w-full px-10 py-10 bg-[#FFE6DF] '>
        <div>
        <div className='section-wrapper flex flex-col gap-8'>
            <div className='flex justify-between md:flex-row flex-col'>
                <h2 className='overflow-hidden heading text-main leading-none flex-2'>
                    THE STEPS I TAKE
                </h2>
                <p className='flex-1' id='paragraphs'>
                   AI can generate interfaces in seconds, but it can't replace thoughtful decisions. Meaningful products come from understanding people, not just prompts.
                </p>
            </div>
            <div className='grid w-full h-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center flex-wrap justify-between gap-4'>
                <div className='bg-main p-6 group hover:-rotate-2 transition duration-300 rounded-2xl relative w-full h-full min-h-[320px] relative overflow-hidden' id='card-1'>
                    <div >
                        <h4 className='text-white'>THINK</h4>
                        <p className='text-white'>UX research, User Flows, User Persona, <br/>Brainstorm</p>
                    </div>
                   
                    <div className='w-[200px] h-[200px] absolute z-20 bottom-[-5px]   rotate-12 left-0'>
                        <img src="/profile/assets/lightbulb.svg" alt="" className='w-full h-full object-contain' />
                    </div>
                    <div className='w-[280px] h-[280px] absolute z-30 bottom-[-50px] opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 rotate-12 left-[-40px]'>
                        <img src="/profile/assets/lightbulb-glow.svg" alt="" className='w-full h-full object-contain' />
                    </div>
                  
                    <div className='absolute right-4 bottom-10 '>
                    <h1 className='opacity-35 
                    text-white! !font-secondary leading-0'>1</h1>
                    </div>
                    
                </div>
                <div className='bg-secondary group p-6 rounded-2xl w-full h-full min-h-[320px]  hover:rotate-2 transition-all duration-300 relative overflow-hidden' id='card-2'>
                    <div className=''>
                        <h4 className='text-white'>STRUCTURE</h4>
                        <p className='text-white'>Wireframe, Design System, Flows, Wire Flows <br/>Designing Components</p>
                    </div>
                   
                    <div className='w-[195px] h-[120px] bottom-4 z-10 absolute '>
                        <img src="/profile/assets/below-block.svg" alt="" className='w-full h-full object-contain' />
                    </div>
                    <div className='w-[195px] h-[120px] bottom-8 lg:bottom-16 transition-all duration-300 group-hover:bottom-8  absolute z-20 '>
                        <img src="/profile/assets/top-block.svg" alt="" className='w-full h-full object-contain' />
                    </div>
                    
                    <div className='absolute right-4 bottom-10 '>
                    <h1 className='opacity-35 
                    text-white! !font-secondary leading-0'>2</h1>
                    </div>
                    
                </div>
                <div className='bg-main p-6 rounded-2xl group w-full min-h-[320px] hover:-rotate-2 transistion duration-300 relative overflow-hidden' id='card-3'>
                    <div className=''>
                        <h4 className='text-white'>EVOLVE</h4>
                        <p className='text-white'>High-Fi Design, Responsive Design, Accessibility, Code</p>
                    </div>
                    <div className='w-1/2 h-1/2 translate-y-20 group-hover:translate-x-[-30px] group-hover:translate-y-15 transistion-all duration-300 translate-x-[-40px]'>
                        <img src="/profile/assets/ARROWS.svg" alt="" className='w-full h-full object-contain' />
                    </div>
                    <div className='absolute right-4 bottom-10 '>
                    <h1 className='opacity-35 
                    text-white! !font-secondary leading-0'>3</h1>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Methods