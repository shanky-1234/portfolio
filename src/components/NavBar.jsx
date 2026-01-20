import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import Button from './shared/Button'
import {Menu, X} from 'lucide-react'
import { UseMenu } from '../context/MenuContext'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'


function NavBar() {
    const {menu,setMenu} = UseMenu()
    const [activeSection,setActiveSection] = useState(null)
    useEffect(()=>{
        const sections=document.querySelectorAll('section[id]')

        const observer = new IntersectionObserver(entries=>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting){
                    setActiveSection(`#${entry.target.id}`)
                }
            })  
        },{
             rootMargin: "-50% 0px -50% 0px", 
      threshold: 0
        }
    )
    sections.forEach((sections)=>observer.observe(sections))
    return () => observer.disconnect()
    },[])

    function handleLink(e){
           e.preventDefault()
    const target = e.currentTarget.getAttribute("data-scroll")
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: target,
        offsetY: 120, // navbar height
      },
      ease: "power2.out",
    })
}

const handleMail=()=>{
    const mailUrl = `mailto:tuladharshashank2@gmail.com?subject=${encodeURIComponent('Inquiry about your service')}&body=${encodeURIComponent('Hello!')}`
    window.location.href=mailUrl
}
  return (
    
    <nav className='bg-secondary rounded-4xl py-4 px-8 md:px-10 h-fit md:inset-x-20 mx-8 inset-x-0 md:mx-10 my-8 top-0 z-99 shadow-lg md:max-w-full fixed  '>
        <div className='w-full flex items-center justify-between'>
             <div className='md:w-15 md:h-15 w-12 h-12'>
                <img src="/profile/profile.png" alt="me-logo" />
            </div>
            <div className='hidden md:block '>
            <ul className='flex gap-12 items-center'>
                <li>
                <Link  data-scroll="#aboutme" onClick={handleLink} className={`${activeSection === '#aboutme' ?'text-main underline underline-offset-4':'text-white'} text-md font-medium hover:text-main transition-colors duration-300`}>
                    About Me
                </Link>
                </li>
                <li>
                   <Link data-scroll="#project" onClick={handleLink} className={`${activeSection === '#project' ?'text-main underline underline-offset-4':'text-white'} text-md font-medium hover:text-main transition-colors duration-300`}>
                    Projects
                </Link>
                </li>
                 <li>
                   <Link data-scroll='#gallery' onClick={handleLink} className={`${activeSection === '#gallery' ?'text-main underline underline-offset-4':'text-white'} text-md font-medium hover:text-main transition-colors duration-300`}>
                    Gallery
                </Link>
                </li>
                <Button content={"Let's Talk"} onClick={handleMail}/>
            </ul>
            </div>
           <div className='block md:hidden' >
            {
            !menu?
            <Menu color='white' onClick={()=>setMenu(true)}/>:
            <X  color='white' onClick={()=>setMenu(false)}/>
            }
           </div>
        </div>
            
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in
    ${menu ? 'max-h-100 opacity-100' : 'max-h-0 opacity-0'}
  `}>
            <div className='bg-secondary '>
                <div className='mt-8'>
                    <ul className='flex flex-col gap-8 items-center'>
                <li>
                <Link data-scroll="#aboutme" onClick={handleLink} className='text-white text-md font-medium'>
                    About Me
                </Link>
                </li>
                <li>
                   <Link data-scroll="#project" onClick={handleLink} className='text-white'>
                    Projects
                </Link>
                </li>
                <li>
                   <Link data-scroll="#gallery" onClick={handleLink} className='text-white'>
                    Gallery
                </Link>
                </li>
                <Button content={"Let's Talk"} onClick={handleMail}/>
            </ul>
                </div>
            </div>
        </div>

    </nav>
  )
}

export default NavBar