import React, { useRef } from "react";
import JobCard from "./shared/JobCard";
import { work } from "../utils/work";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import Pills from "./shared/Pills";
import { pill } from "../utils/pill";
import Button from "./shared/Button";
import StickyNote from "./shared/StickyNote";
import Draggable from 'react-draggable'


function AboutMe() {
  const nodeRef = useRef(null);
  const boundref = useRef(null)
  const dragRef = useRef(null)

  useGSAP(()=>{
      const tl = gsap.timeline({
        scrollTrigger:{
          trigger:'#aboutme',
          scrub:true,
          markers:false,
          start:'-80% top',
          end:'0%',
        }
      })

      tl.fromTo('#aboutme',{
        scale:0.8
      },{
        scale:1
      })
  },[])

  return (
    <section id="aboutme" className="section-wrapper">
      <div className="px-10 py-10 rounded-2xl bg-[#FFE6DF]">
      <div className="w-full flex md:flex-row flex-col-reverse relative justify-between gap-12">
        <div className="w-full">
        <h2 className="text-4xl md:text-left text-center font-bold text-main">
          PERSON BEHIND THE PIXELS
        </h2>
        <div className="w-full text-left mb-4">
          <p className="font-secondary text-sm md:text-[16px] mt-4  text-text lg:w-[80%] ">
            Hey! I'm Shashank, a UI/UX designer and Full Stack Developer who loves turning messy ideas into experiences that feel simple, intuitive, and enjoyable.
My journey started with designing interfaces, but curiosity quickly pulled me into development. 
<br/>
<br/>Now I enjoy bringing my own designs to life with code, building products that don't just look good—they work beautifully.
Lately, I've been diving into the world of AI, exploring RAG systems, intelligent interfaces, and how arificial intelligence can create more meaningful user experiences.
<br/>
<br/>
When I'm not behind a screen, you'll probably find me playing guitar, sketching new ideas, exploring cafés, or wondering how everyday products could be designed just a little better.
I'm always learning, always building, and always excited for the next challenge.
          </p>
        </div>
          <div className="mb-4">
          <Button content={'LinkedIn'} className={'bg-main'}/>
        </div>
        <div className="flex flex-wrap w-full gap-2">
        
          {
            pill.map((item,index)=>{
              return(
                <Pills key={index} content={item.skill} rotate={item.rotate}/>
              )
            })
          }
        </div>
      
      </div>
      <div className="w-full h-full relative overflow-visible rotate-4">
        <Draggable nodeRef={nodeRef} bounds="parent">
          <div ref={nodeRef} className="cursor-move absolute top-10 left-10 z-50 ">
        <StickyNote />
        </div>
        </Draggable>
        <div className="relative z-20 bg-secondary lg:min-h-[600px] md:min-h-[500px] min-h-[400px] w-full h-full min-w-2xs rounded-2xl overflow-hidden ">
          <div className="w-full lg:min-w-[550px] lg:min-h-[550px] h-full absolute bottom-[-15px] -translate-x-1">
            <img src="/profile/mypicture2.png" alt="pic" className="w-full h-full object-cover"/>
          </div>
        </div>
      </div>
      </div>
      </div>
    </section>
  );
}

export default AboutMe;
