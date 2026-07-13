
import reactLogo from './assets/react.svg'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollSmoother from 'gsap/ScrollSmoother'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import AboutMe from './components/AboutMe'
import { MenuProvider, UseMenu } from './context/MenuContext'
import Projects from './components/Projects'
import gsap, { ScrollToPlugin, SplitText } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import {Link} from 'react-router'
import ExtraLink from './components/ExtraLink'
import Gallery from './components/Gallery'
import Cta from './components/Cta'
import Footer from './components/shared/Footer'
import Methods from './components/Methods'
import Experiences from './components/Experiences'
import LoadingScreen from './components/LoadingScreen'

gsap.registerPlugin(ScrollTrigger,ScrollSmoother,ScrollToPlugin,SplitText)

function App() {
  const {menu,setMenu} = UseMenu()
  useGSAP(()=>{
    const smoother = ScrollSmoother.create({
      wrapper:'#smooth-wrapper',
      content:'#smooth-content',
      smooth:2,
      effects:true,
    })

    window.addEventListener('load',()=>{
      ScrollTrigger.refresh()
    })

    return ()=>{
      smoother.kill()
    }
  })
  return (
    <>
     <LoadingScreen/>
     <NavBar/>
     {
      menu &&
      <div onClick={()=>setMenu(false)} className={`fixed transistion-all duration-500 top-0 left-0 h-screen w-full w-dvw bg-secondary opacity-50 z-20`}></div>
     }
     <div id="smooth-wrapper">
		<div id="smooth-content" className='pb-[5vh]'>
     <HeroSection/>
     <div className='flex justify-center mt-[50px] mb-[50px]'>
      <img src='/profile/icons/line.svg'/>
     </div>
     <AboutMe/>
     <div className='flex justify-center mt-[50px] mb-[50px]'>
      <img src='/profile/icons/line.svg'/>
     </div>
     <Methods/>
     <div className='flex justify-center mt-[50px] mb-[50px]'>
      <img src='/profile/icons/line.svg'/>
     </div>
     <Experiences/> 
     <div className='flex justify-center mt-[50px] mb-[50px]'>
      <img src='/profile/icons/line.svg'/>
     </div>
     <Projects/>
     <ExtraLink/>
     <div className='flex justify-center mt-[50px] mb-[50px]'>
      <img src='/profile/icons/line.svg'/>
     </div>
    
     <Gallery/>
     <div className='flex justify-center mt-[50px] mb-[50px]'>
      <img src='/profile/icons/line.svg'/>
     </div>
 
     <div className='pb-40'>
     <Footer/>
     </div>
     </div>
     </div>
    </>
  )
}

export default App
