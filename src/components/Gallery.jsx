import React, { useRef } from "react"
import GalleryCard from "./shared/GalleryCard"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { gallery } from "../utils/gallery"
import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css';
import { Autoplay } from "swiper/modules"

gsap.registerPlugin(ScrollTrigger)

function Gallery() {


  return (
    <section id="gallery" className="overflow-hidden h-fit">
      <div className="h-full">
      <div className="flex justify-center flex-col items-center mb-4">
        <h2 className=" text-secondary leading-none text-center">
          GRAPHIC DESIGN AND BRANDING
        </h2>
        <p className="font-secondary">
          Some Designs and Posters I have made
        </p>
      </div>
      
     <Swiper
  modules={[Autoplay]}
  autoplay={true}
  speed={1000}
  slidesPerView={3}
  spaceBetween={32}
  loop={true}
  observer={true}
  observeParents={true}
  loopAddBlankSlides={false}
  className="gallery-swiper !overflow-visible "
  breakpoints={{
   0: {
    slidesPerView: 1.12,
    spaceBetween: 16,
    autoplay:false
  },
  768: {
    slidesPerView: 2.1,
    spaceBetween: 24,
    autoplay:false
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 32,
     autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
  },
    1324: {
    slidesPerView: 3,
    spaceBetween: 80,
  },
  }}
>
  {
    gallery.map((item,index)=>{
      return(
        <SwiperSlide >
          <GalleryCard small={index%2 === 1} title={item.title} description={item.description} src2={item.src2} src={item.src}/>
        </SwiperSlide>
      )
    })
  }
        
          
      </Swiper>
      </div>
    </section>
  )
}

export default Gallery