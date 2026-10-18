import React, { useRef } from 'react'
import ProjectCard from './shared/ProjectCard'
import { useGSAP } from '@gsap/react'
import gsap, { SplitText } from 'gsap/all'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { project } from '../utils/project'

gsap.registerPlugin(ScrollTrigger)

function Projects() {
  const containerRef = useRef(null)
  const sectionRef = useRef(null)
  useGSAP(() => {
    const cardsWrappers = gsap.utils.toArray(".card-wrapper", sectionRef.current)
    const cards = gsap.utils.toArray(".project-card", sectionRef.current)

    cardsWrappers.forEach((wrapper, index) => {
      const card = cards[index]
      const isLastCard = index === cards.length - 1

      if (isLastCard) return
      const remainingStackDistance = () =>
        cardsWrappers
          .slice(index + 1)
          .reduce((distance, nextWrapper) => distance + nextWrapper.offsetHeight, 0)

      gsap.to(card, {
        scale: 0.9 + 0.025 * index,
        rotationX: -5,
        transformOrigin: "top center",
        scrollTrigger: {
          trigger: wrapper,
          start: `top ${60 + 10 * index}`,
          end: () => `+=${remainingStackDistance()}`,
          scrub: true,
          pin: wrapper,
          pinSpacing: false,
          invalidateOnRefresh: true,
          onRefresh: (self) => {
            if (self.pin) self.pin.style.zIndex = String(index + 1)
            if (self.pinSpacer) self.pinSpacer.style.zIndex = String(index + 1)
          },
          onUpdate: (self) => {
            if (self.pin) self.pin.style.zIndex = String(index + 1)
            if (self.pinSpacer) self.pinSpacer.style.zIndex = String(index + 1)
          },
        },
      })
    })

    const splitTexts = SplitText.create(".heading-2", {
      type: "words",
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".project-heading-content",
        once: true,
      },
    })

    tl.from("#paragraph-project", {
      yPercent: 100,
      opacity: 0,
      filter: "blur(10px)",
      ease: "power1.inOut",
    }, 0.3)

    tl.from(splitTexts.words, {
      yPercent: 100,
      opacity: 0,
      stagger: 0.08,
      ease: "power4.out",
      duration: 0.6,
    })

    return () => splitTexts.revert()
  }, { scope: containerRef })

  return (
    <section
      ref={containerRef}
      className="section-wrapper mb-10 md:mb-20 project"
    >
        <div className="project-heading-content flex md:flex-row flex-col flex-2 justify-between mb-4" id='project-heading'>
          <h2 className="tracking-tight font-bold text-main flex-2 leading-none heading-2">
            REAL PROJECTS, REAL RESULTS
          </h2>
          <p className="flex-1 text-text" id='paragraph-project'>
            Real projects. Real challenges. Thoughtful solutions built with
            users at the center.
          </p>
        </div>
       
        <div ref={sectionRef} className="" id="project-section">
          <div className='w-full m-auto' id='cards'>
          {project.map((item, index) => (
            <div
              key={item.id ?? index}
              className="card-wrapper relative w-full"
              style={{ perspective: 500, zIndex: index + 1 }}
            >
            <ProjectCard key={item.id}
              link={item.link} className="project-card w-full" project={item.projectName} badges={item.badge} description={item.description} img1={item.img1} img2={item.img2} img3={item.img3}
            />
            </div>
          ))}
          </div>

          {/* <div className='w-full min-h-[20vh]'/> */}
        </div>
        
       
    </section>
  )
}

export default Projects