import React, { useRef } from "react"
import GalleryCard from "./shared/GalleryCard"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { gallery } from "../utils/gallery"

gsap.registerPlugin(ScrollTrigger)

function Gallery() {
  const sliderRef = useRef(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()
    
    // Desktop horizontal scroll
    mm.add("(min-width: 770px)", () => {
      if (!sliderRef.current) return

      const sliderValue = sliderRef.current.scrollWidth - window.innerWidth

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".gallery",
          start: "top top",
          end: `bottom top`,
          scrub: true,
          endTrigger: 'footer',
          pin: true,
          invalidateOnRefresh: true,
          pinSpacing: true
        },
      })

      tl.to(".slider", {
        x: -sliderValue,
        ease: "power1.inOut",
      })
    })

    // Mobile & Tablet - clear GSAP props
    mm.add("(max-width: 769px)", () => {
      gsap.set(".slider", { clearProps: "all" })
    })

    return () => mm.revert()
  })

  return (
    <section id="gallery" className="gallery w-full overflow-x-hidden md:h-screen md:px-30 px-8 md:mt-20 mt-10 text-center">
      <div>
        <h1 className="text-4xl tracking-tight font-bold text-main">
          Gallery
        </h1>
        <p className="font-secondary">
          Some Designs and Posters I have made
        </p>
      </div>
      
      <section
        ref={sliderRef}
        className="
          slider
          flex flex-col
          md:flex-row md:flex-nowrap
          w-full md:w-[200%]
          gap-8 mt-10
          overflow-hidden
        "
      >
        {
          gallery.map((item,index)=>{
            return(
              <GalleryCard key={index} src={item.src}/>
            )
          })
        }
      </section>
    </section>
  )
}

export default Gallery