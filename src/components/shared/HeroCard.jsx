import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'


function HeroCard({rotate,bg,src, className}) {
  
  const cardRef = useRef(null)
  const imageRef = useRef(null)

  const xTo = useRef(null)
  const yTo = useRef(null)
  const scaleTo = useRef(null)

  useGSAP(()=>{
    gsap.set(imageRef.current,{
      x:0,
      y:40,
      scale:1
    })

    xTo.current = gsap.quickTo(imageRef.current,'x',{
      duration:0.4,
      ease:"power3.out"
    })

    yTo.current = gsap.quickTo(imageRef.current,'y',{
      duration:0.4,
      ease:"power3.out"
    })

    scaleTo.current = gsap.quickTo(imageRef.current,"scale",{
      duration:0.4,
      ease:"power3.out"
    })
  },[])

  const handleMouseEvent = (e)=>{
    const rect = cardRef.current.getBoundingClientRect()

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top;

     const xPercent = mouseX / rect.width - 0.5;
    const yPercent = mouseY / rect.height - 0.5;

    const moveX = xPercent * 18;
    const moveY = yPercent * 18;

    xTo.current(moveX);
    yTo.current(40 + moveY);
    scaleTo.current(1.04);
  };


  const handleMouseLeave = () => {
    xTo.current(0);
    yTo.current(40);
    scaleTo.current(1);
  }


  return (
    <div ref={cardRef} onMouseMove={handleMouseEvent} onMouseLeave={handleMouseLeave} className={`${rotate} ${bg} ${className} rounded-2xl overflow-hidden md:w-[300px] md:h-[400px] w-[250px] h-[350px]`}>
        <div ref={imageRef} className='w-full h-full translate-y-12'>
            <img  src={src} className='w-full h-full object-contain grayscale-100 hover:grayscale-0 transition-all'/>
        </div>
    </div>
  )
}

export default HeroCard