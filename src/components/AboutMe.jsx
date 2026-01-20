import React from "react";
import JobCard from "./shared/JobCard";
import { work } from "../utils/work";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import Pills from "./shared/Pills";
import { pill } from "../utils/pill";

function AboutMe() {
  useGSAP(()=>{
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:'#aboutme',
        start:'80% top',
        end:'+=150',
        scrub:0.2
      }
    })
    tl.to('.select',{
      direction:1,
      duration:1,
      clipPath:'polygon(0 0, 0 100%, 100% 100%, 100% 0)',
      ease:'power3.inOut'
    })
  })
  return (
    <section id="aboutme" className="md:mx-20 mx-8 relative md:mt-20 mt-10 text-center">
      <div className="w-full">
        <h1 className="text-4xl tracking-tight font-bold text-main">
          A Little About Me
        </h1>
        <div className="w-full lg:text-center text-left  flex justify-center">
          <p className="font-secondary text-sm md:text-[16px] mt-4  lg:w-[80%] ">
            I am Shashank Tuladhar and i m currently working as UI/UX Designer
            at Ikigai Tech. I’m a UI/UX designer and React developer who enjoys
            turning complex ideas into simple and creative usable digital
            experiences. I focus on understanding the problem first how users
            think, what they need, and where things break before designing
            interfaces that feel clear and intentional. When the design makes
            sense, I bring it to life with React, paying close attention to
            structure, performance, and scalability. I care about clarity,
            consistency, and building products that don’t just look good, but
            actually work.
          </p>
        </div>
        <h3 className="mt-4 text-lg text-main">Core Skills</h3>
        <div className="flex mt-2 flex-wrap lg:w-1/2 w-full justify-center mx-auto gap-2">
        
          {
            pill.map((item,index)=>{
              return(
                <Pills key={index} content={item.skill} rotate={item.rotate}/>
              )
            })
          }
        </div>
        <div className="flex-center relative mt-10 ">
        <div className="md:w-200 h-1/2 md:h-1/4 md:block hidden select" style={{clipPath:'polygon(0 0, 0 0, 0 0, 0 0)'}}>
          <img src="/profile/selection.svg" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="flex flex-col gap-4 md:absolute justify-center z-10 ">
          {
            work.map((item,index)=>{
              return(
                <JobCard key={index} office={item.office} time={item.time} position={item.position}/>
              )
            })
          }
          
        </div>
        </div>
      </div>
      
    </section>
  );
}

export default AboutMe;
