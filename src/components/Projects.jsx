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
  const spacerRef = useRef(null)
  useGSAP(()=>{
    const cardsWrappers = gsap.utils.toArray(".card-wrapper");
const cards = gsap.utils.toArray(".project-card");

cardsWrappers.forEach((wrapper, i) => {
  const card = cards[i];
  let scale = 1,
    rotation = 0;
  if (i !== cards.length - 1) {
    scale = 0.9 + 0.025 * i;
    rotation = -5;
  }
  gsap.to(card, {
    scale: scale,
    rotationX: rotation,
    transformOrigin: "top center",
    scrollTrigger: {
      trigger: wrapper,
      start: "top " + (60 + 10 * i),
      end: "bottom bottom",
      endTrigger: "#project-section",
      scrub: true,
      pin: wrapper,
      pinSpacing: false,
      // markers: {
      //   indent: 100 * i,
      //   startColor: "#0ae448",
      //   endColor: "#fec5fb",
      //   fontSize: "14px"
      // },
      id: i + 1
    }
  });
});

const tl = gsap.timeline({
  scrollTrigger:{
    trigger:"#project-heading"
  }
})
  const splitTexts = SplitText.create(".heading-2", {
    type: "words",
  })

   tl.from('#paragraph-project',{
            yPercent:100,
            opacity:0,
            filter: 'blur(10px)',
            stagger:0.6,
            ease:'power1.inOut'
        },0.3)

  tl.from(splitTexts.words, {
    yPercent: 100,
    opacity: 0,
    stagger: 0.08,
    ease: "power4.out",
    duration: 0.6,
  })

  
  return () => splitTexts.revert()
  })

  return (
    <section
      ref={containerRef}
      className="section-wrapper mb-10 md:mb-20 project"
      id='project-heading '
    >
        <div className="flex md:flex-row flex-col flex-2 justify-between mb-4" id='project-heading'>
          <h2 className="tracking-tight font-bold text-main flex-2 leading-none heading-2">
            PIXELS WITH PURPOSE
          </h2>
          <p className="flex-1 text-text" id='paragraph-project'>
            Real projects. Real challenges. Thoughtful solutions built with
            users at the center.
          </p>
        </div>
       
        <div ref={sectionRef} className="" id="project-section">
          <div className='w-full m-auto md:space-y-8' id='cards'>
          {project.map((item, index) => (
            <div key={item.id ?? index} className="card-wrapper w-full mb-12" style={{ perspective: 500 }}>
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