import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollSmoother from 'gsap/ScrollSmoother'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import AboutMe from '../components/AboutMe'
import { MenuProvider, UseMenu } from '../context/MenuContext'
import Projects from '../components/Projects'
import { ScrollToPlugin, SplitText } from 'gsap/all'
import {Link} from 'react-router'
import ExtraLink from '../components/ExtraLink'
import Cta from '../components/Cta'
import Methods from '../components/Methods'
import Experiences from '../components/Experiences'
import LoadingScreen from '../components/LoadingScreen'
import FloatingCardShowcase from '../components/FloatingCardShowcase'
import NewFooter from '../components/shared/NewFooter'




function Home() {
  const {menu,setMenu} = UseMenu()
  return (
    <>

     {
      menu &&
      <div onClick={()=>setMenu(false)} className={`fixed transistion-all duration-500 top-0 left-0 h-screen w-full w-dvw bg-secondary opacity-50 z-20`}></div>
     }

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
    
     <FloatingCardShowcase/>
     <div className='flex justify-center mt-[50px] '>
      <img src='/profile/icons/line.svg'/>
     </div>
 
     <NewFooter/>
     <div className="h-[10vh]" aria-hidden="true" />
    </>
  )
}

export default Home
