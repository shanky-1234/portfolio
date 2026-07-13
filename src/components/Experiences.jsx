import React from 'react'
import { work } from '../utils/work'
import JobCard from './shared/JobCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'

function Experiences() {
     useGSAP(() => {
  const splitTexts = SplitText.create(".heading-1", {
    type: "words",
  })

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#experiences",
      markers: true,
      start: "top 75%",
      once: true,
    },
  })

  tl.from(splitTexts.words, {
    yPercent: 100,
    opacity: 0,
    stagger: 0.08,
    ease: "power4.out",
    duration: 0.6,
  })

  tl.from('#experience-card-0',{
            yPercent:100,
            opacity:0,
            filter: 'blur(10px)',
            stagger:0.2,
            ease:'power1.inOut'
        },0.5)

         tl.from('#experience-card-1',{
            yPercent:100,
            opacity:0,
            filter: 'blur(10px)',
            stagger:0.2,
            ease:'power1.inOut'
        },0.8)

  return () => splitTexts.revert()
}, [])
  return (
    <section className='section-wrapper' id='experiences'>
        <div>
            <h2 className='text-main text-center leading-none mb-4 heading-1' >MY JOURNEY SO FAR</h2>
        </div>
        <div className='flex md:flex-row flex-col gap-4 justify-between'>
            {
                work.map((item,key)=>{
                    return(
                    <JobCard id={`experience-card-${key}`} src={item.logo} key={key} office={item.office} time={item.time} position={item.position} />
                )})
            }
        </div>
    </section>
  )
}

export default Experiences