import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Heading from './shared/Heading'
function ProblemAndOpportunities() {
  const sectionRef = useRef(null)
    const stickyHeadingRef = useRef(null)
  useGSAP(()=>{

    const mm = gsap.matchMedia()


    mm.add("(min-width: 768px)",()=>{
      const tl = gsap.timeline(
      {
        scrollTrigger:{
          trigger:sectionRef.current,
          start:'top top',
          end:'bottom bottom',
          pin:stickyHeadingRef.current,
          pinSpacing:false,
          invalidateOnRefresh:true
        }
      }
    )
    return ()=>{
      tl.kill()
    }
    })
    return () => {
        mm.revert();
      };
  
  },{scope:sectionRef},[])
  return (
   <section ref={sectionRef} className="bg-[#FFE6DF] py-12 md:mb-20 mb-16">
      <div className="section-wrapper">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
          
          {/* Sticky heading */}
          <div ref={stickyHeadingRef} className="flex items-center h-full md:flex-3 md:pt-4">
            <Heading num={'03'} heading={'THE PROBLEM AND OPPORTUNITY'}/>
          </div>

          {/* Scrolling content */}
          <div className="md:flex-2">
            <div className="mb-10">
              <h5 className="mb-4">The Challenge</h5>

              <div className="flex flex-col space-y-4">
                <div className="bg-main p-6 rounded-2xl">
                  <h4 className="text-white">
                    COMPLEX INFORMATION ARCHITECTURE
                  </h4>

                  <p className="text-white">
                    Mustang Heli provides several aviation services, each with
                    different audiences and purposes. The challenge was to
                    organize them clearly without making the website feel
                    overwhelming.
                  </p>
                </div>

                <div className="bg-main p-6 rounded-2xl">
                  <h4 className="text-white">
                    CONVEYING THE STANDARDS OF SAFETY
                  </h4>

                  <p className="text-white">
                    One of Mustang Heli’s important services is its emergency
                    service. The tourism and aviation messaging could have
                    overshadowed this essential offering.
                  </p>
                </div>

                <div className="bg-main p-6 rounded-2xl">
                  <h4 className="text-white">DIVERSE USER NEEDS</h4>

                  <p className="text-white">
                    The website had to serve tourists, corporate clients,
                    pilgrims, filmmakers, and emergency users within a single
                    experience.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h5 className="mb-4">How I tackled it</h5>

              <div className="flex flex-col space-y-4">
                <div className="bg-secondary p-6 rounded-2xl">
                  <h4 className="text-white">
                    SIMPLIFIED SERVICE STRUCTURE
                  </h4>

                  <p className="text-white">
                    I grouped related services into clear categories and
                    introduced a simpler navigation structure to make service
                    discovery faster.
                  </p>
                </div>

                <div className="bg-secondary p-6 rounded-2xl">
                  <h4 className="text-white">
                    EMPHASIZED SAFETY AND EMERGENCY ACCESS
                  </h4>

                  <p className="text-white">
                    I gave safety information and emergency contact actions
                    stronger visual priority so urgent users could access them
                    immediately.
                  </p>
                </div>

                <div className="bg-secondary p-6 rounded-2xl">
                  <h4 className="text-white">
                    DESIGNED FOR MULTIPLE USER JOURNEYS
                  </h4>

                  <p className="text-white">
                    Each major user group was given a clearer path based on
                    their intent, whether they wanted tourism, charter,
                    pilgrimage, filming, or emergency services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemAndOpportunities