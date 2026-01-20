import React from 'react'
import ProjectCard from './shared/ProjectCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { project } from '../utils/project'

gsap.registerPlugin(ScrollTrigger)

function Projects() {
  
  useGSAP(() => {
    const cards = gsap.utils.toArray('.project-card')

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.project',
        start: 'top top',
        end: `+=${cards.length * 60}%`,
        pin: true,
        scrub: 0.6,
        anticipatePin:1,
        markers: false,
        invalidateOnRefresh: true
      }
    })

    cards.forEach((card, index) => {
      if (index === 0) return

      tl.to(card, {
        yPercent: -index * 100,
        rotate: index % 2 === 0 ? -2 : 2,
        ease: 'power1.inOut'
      }, index)
    })
 // 🔑 REQUIRED: fix broken layout on reload
 window.addEventListener("load", () => { ScrollTrigger.refresh(); });
  })

  return (
    <section className='md:px-30 px-8 relative h-screen md:mt-20 mt-10 text-center scroll-mt-32 bg-image project' id='project'>
      <div>
        <h1 className="text-4xl tracking-tight font-bold text-main">
          Featured Projects
        </h1>
        <p className='font-secondary'>A little something of what i have done</p>
      </div>

      <div className='h-full overflow-hidden mt-10 w-full space-y-4 mx-auto mt-4'>
        {
          project.map((item,index)=>{
            return(
              <ProjectCard badges={item.badge} key={index} color={item.color} img1={item.img1} img2={item.img2} project={item.projectName} link={'https://mitrasamaj.org/'} description={item.description}/>
            )
          })
        }
      </div>
    </section>
  )
}

export default Projects
