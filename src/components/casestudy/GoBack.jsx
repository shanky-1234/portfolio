import React, { useRef } from 'react'
import Button from '../shared/Button'
import { useNavigate } from 'react-router'
import { useGSAP } from '@gsap/react';
import gsap, { ScrollTrigger } from 'gsap/all';

function GoBack() {
    const navigate = useNavigate()
    const progressRef = useRef(null)
    useGSAP(
  () => {
    const progressBar = progressRef.current;
    const caseStudyPage = document.querySelector("#case-study-page");

    if (!progressBar || !caseStudyPage) return;

    gsap.set(progressBar, {
      scaleX: 0,
      transformOrigin: "left center",
    });

    const animation = gsap.to(progressBar, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: caseStudyPage,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.2,
        invalidateOnRefresh: true,
      },
    });

    const assets = caseStudyPage.querySelectorAll("img, video");

    const refreshScrollTrigger = () => {
      ScrollTrigger.refresh();
    };

    assets.forEach((asset) => {
      if (
        asset.tagName === "IMG" &&
        asset.complete
      ) {
        return;
      }

      asset.addEventListener(
        asset.tagName === "VIDEO" ? "loadedmetadata" : "load",
        refreshScrollTrigger
      );
    });

    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      assets.forEach((asset) => {
        asset.removeEventListener(
          asset.tagName === "VIDEO" ? "loadedmetadata" : "load",
          refreshScrollTrigger
        );
      });

      animation.scrollTrigger?.kill();
      animation.kill();
    };
  },
  {
    dependencies: [location.pathname],
    revertOnUpdate: true,
  }
);
  return (
    <nav className='w-full h-fit pt-3 pb-3 block fixed top-0 left-0 z-50 bg-white/10 backdrop-blur-xl'>
        <div className='section-wrapper '>
            <Button content={'Go Back'} className={'bg-main'} onClick={()=>navigate('/')}/>
        </div>
         <div className="absolute bottom-0 left-0 h-[3px] w-full bg-main/15">
     
        <div
          ref={progressRef}
          className="h-full w-full bg-main"
        />
      </div>
    </nav>
  )
}

export default GoBack