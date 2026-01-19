
import reactLogo from './assets/react.svg'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollSmoother from 'gsap/ScrollSmoother'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import AboutMe from './components/AboutMe'
import { MenuProvider, UseMenu } from './context/MenuContext'
import Projects from './components/Projects'
import gsap, { ScrollToPlugin } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import {Link} from 'react-router'
import ExtraLink from './components/ExtraLink'
import Gallery from './components/Gallery'
import Cta from './components/Cta'
import Footer from './components/shared/Footer'

gsap.registerPlugin(ScrollTrigger,ScrollSmoother,ScrollToPlugin)

function App() {
  const {menu,setMenu} = UseMenu()
  useGSAP(()=>{
    ScrollSmoother.create({
      smooth:2,
      effects:true
    })
  })
  return (
    <>

     <NavBar/>
     {
      menu &&
      <div onClick={()=>setMenu(false)} className={`fixed transistion-all duration-500 top-0 left-0 h-screen w-dvw bg-secondary opacity-50 z-20`}></div>
     }
     <div id="smooth-wrapper">
		<div id="smooth-content">
     <HeroSection/>
     <AboutMe/>
     <div>
     <Projects/>
     </div>
     <ExtraLink/>
     <div>
     <Gallery/>
     </div>
     <Cta/>
     <Footer/>
     <div className='scroll-container'/>
     </div>
     </div>
    </>
  )
}

export default App
