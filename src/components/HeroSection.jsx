import React, { useRef } from 'react'
import Button from './shared/Button'
import { Link } from 'react-router'
import {useGSAP} from '@gsap/react'
import gsap, { SplitText } from 'gsap/all'
    import Typewriter from 'typewriter-effect';
import HeroCard from './shared/HeroCard'
import CardSwipe from './shared/CardSwipe'

function HeroSection() {

    const iconHoverRefs = useRef([])
    const heroRef = useRef(null)

    const floatingIcons = [
        {
            src: '/profile/icons/image%202.png',
            alt: 'Figma',
            label: 'My Everyday Tool',
            position: 'lg:left-[180px] md:left-[80px] top-10 -rotate-20',
        },
        {
            src: '/profile/icons/image%201.png',
            alt: 'Photoshop',
            label: 'Pixel Precision',
            position: 'lg:left-[20%] md:left-[90px] top-45 rotate-10',
        },
        {
            src: '/profile/icons/image%203.png',
            alt: 'Design',
            label: 'Creating Side Projects',
            position: 'lg:left-[220px] md:left-[120px] top-80 -rotate-10',
        },
        {
            src: '/profile/icons/image%207.png',
            alt: 'Node.js',
            label: 'Backend Ready',
            position: 'lg:right-[180px] md:right-[80px] top-10 -rotate-20',
        },
        {
            src: '/profile/icons/image%205.png',
            alt: 'MongoDB',
            label: 'Data Driven',
            position: 'lg:right-[20%] md:right-[90px] top-45 rotate-10',
        },
        {
            src: '/profile/icons/image%2013.png',
            alt: 'LangChain',
            label: 'Exploring GenAI and RAG',
            position: 'lg:right-[220px] md:right-[120px] top-80 -rotate-10',
        },
    ]

    useGSAP(()=>{
        const icons = gsap.utils.toArray('.floating-icon')
        const heroEl = heroRef.current || document.querySelector('.hero-section')

        const splitHeading = SplitText.create('#title',{
            type:"words"
        })

       

        const runAnim = () => {
             gsap.from(splitHeading.words,{
             yPercent:100,
            opacity:0,
            stagger:0.1,
            ease:'power4.out',
            duration:1,
        })
            if (heroEl && icons.length) {
                const center = heroEl.getBoundingClientRect()

                // position icons at center (behind cards)
                icons.forEach((icon) => {
                    const rect = icon.getBoundingClientRect()
                    const dx = center.left + center.width / 2 - (rect.left + rect.width / 2)
                    const dy = center.top + center.height / 2 - (rect.top + rect.height / 2)
                    gsap.set(icon, { x: dx, y: dy, scale: 0.2, opacity: 0 })
                })

                // explode to their final positions, then start floating loop
                const tl = gsap.timeline()
                tl.to(icons, {
                    x: 0,
                    y: 0,
                    scale: 1,
                    opacity: 1,
                    rotate: () => gsap.utils.random(-10, 10),
                    duration: 0.8,
                    ease: 'back.out(1.7)',
                    stagger: 0.08,
                })
                .add(() => {
                    // floating motion (continuous)
                    icons.forEach((icon) => {
                        gsap.to(icon, {
                            y: gsap.utils.random(-10, -20),
                            duration: gsap.utils.random(2.5, 5),
                            rotate: gsap.utils.random(-10, 12),
                            yoyo: true,
                            ease: 'sine.inOut',
                            repeat: -1,
                            delay: gsap.utils.random(0, 1.5),
                        })
                    })
                })
            } else {
                // fallback: just run floating motion if center cannot be computed
                gsap.utils.toArray('.floating-icon').forEach((icon)=>{
                    gsap.to(icon,{
                        y:gsap.utils.random(-10,-20),
                        duration:gsap.utils.random(2.5,5),
                        rotate:gsap.utils.random(-10,12),
                        stagger:0.2,
                        yoyo:true,
                        ease:"sine.inOut",
                        repeat:-1,
                        delay:gsap.utils.random(0,1.5)
                    })
                })
            }
        }

        if (window && window.__appLoaded) {
            runAnim()
        } else {
            window.addEventListener('loading:complete', runAnim, { once: true })
        }

        return () => {
            try { window.removeEventListener('loading:complete', runAnim) } catch (e) {}
        }
    },[])

    const handleResume = ()=>{
        window.open(
    "/profile/resume/shashank.pdf",
    "_blank",
    "noopener,noreferrer"
  );
    }

    const mouseEnter = (index)=>{
        const label = iconHoverRefs.current[index]
        if(label) label.style.opacity = 1
    }

    const mouseLeave = (index)=>{
        const label = iconHoverRefs.current[index]
        if(label) label.style.opacity = 0
    }

  return (
    <>
    <section ref={heroRef} className='px-20 section-wrapper relative hero-section '>
        <div className='md:mt-45 lg:mt-40 mt-40 mb-5'>
        {/* Blur Section*/}
        <div className='block overflow-x-hidden bg-main rounded-full w-80 h-80 md:w-100 md:h-100 absolute inset-0 mx-auto z-0 blur-xl opacity-20'>
        </div>
        <div className='flex flex-col md:flex-row mx-auto justify-center items-center relative'>
            <CardSwipe/>

        </div>
        {/*Floating Icons*/}
        {floatingIcons.map((icon, index) => (
            <div
                key={icon.src}
                className={`hidden md:block floating-icon absolute ${icon.position} md:w-14 w-12 h-14 md:h-14 group`}
                onMouseEnter={() => mouseEnter(index)}
                onMouseLeave={() => mouseLeave(index)}
            >
                <div className='md:w-14 w-12 h-14 md:h-14 rounded-3xl bg-white/95 border border-white/80 shadow-xl flex items-center justify-center p-2 transition-transform duration-300 hover:scale-110'>
                    <img
                        src={icon.src}
                        alt={icon.alt}
                        className='w-full h-full object-contain'
                    />
                </div>
                <div
                    ref={(el) => (iconHoverRefs.current[index] = el)}
                    className='opacity-0 transition-opacity duration-200 mt-2 absolute left-1/2 -translate-x-1/2 whitespace-nowrap bg-white/95 border border-[#e5e5e5] rounded-full px-3 py-1 shadow-lg text-xs font-semibold text-text'
                >
                    <span className='text-md font-secondary text-gray-800'>{icon.label}</span>
                    
                </div>
            </div>
        ))}
        </div>
        <div>
            <h1 className='text-center mx-auto leading-none' id='title'>DESIGNED TO REACT</h1>
    
            <span className='text-center flex justify-center font-secondary text-[12px] text-text'>(No Pun Intended)</span>
            <div className='flex justify-center flex-col items-center mt-10 '>
                <p className='text-main'>Hi, I am</p>
                <div className='flex flex-col items-center gap-1 mb-4'>
                <h3 className='text-main text-center'>SHASHANK TULADHAR</h3>
                <h5 className='font-secondary text-text text-[16px] font-medium text-center'>User Centric Product Designer/Developer</h5>
            </div>
            <Button content={'Resume'} className='w-fit bg-main '/>
            </div>
            </div>
    </section>
        </>
  )
}

export default HeroSection