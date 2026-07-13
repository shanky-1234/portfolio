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
    
    <nav className='w-full md:w-fit mx-auto fixed h-fit inset-0 z-990 py-4 block '>
        <div className='w-full flex items-center justify-between'>
             
            <div className='hidden md:block '>
            <ul className='flex gap-12 items-center backdrop-blur-lg rounded-full py-2 px-6 '>
                <li>
                    <div className='md:w-12 md:h-12 w-16 h-16'>
                <img src="/profile/profile.png" alt="me-logo" />
            </div>
                </li>
                <li>
                <Link  data-scroll="#aboutme" onClick={handleLink} className={`${activeSection === '#aboutme' ?'text-text font-[900]':'text-main font-bold'} font-secondary text-md transition-colors duration-300`}>
                    About Me
                </Link>
                </li>
                <li>
                   <Link data-scroll=".project" onClick={handleLink} className={`${activeSection === '.project' ?'text-text font-[900]':'text-main font-bold'} font-secondary text-md transition-colors duration-300`}>
                    Projects
                </Link>
                </li>
                 <li>
                   <Link data-scroll='#gallery' onClick={handleLink} className={`${activeSection === '#gallery' ?'text-text font-[900]':'text-main font-bold'} font-secondary text-md transition-colors duration-300`}>
                    Gallery
                </Link>
                </li>
                <Button content={"Let's Talk"} onClick={handleMail} className={'bg-main'}/>
            </ul>
            </div>
           <div className={`${menu ? 'bg-secondary rounded-bl-none rounded-br-none rounded-t-2xl':'bg-tertiary'} transition-all duration-300 mx-12 flex items-center justify-between md:px-8 md:py-4 py-2 px-4 rounded-full w-full md:hidden`} >
                    <div className='md:w-12 md:h-12 w-12 h-12'>
                <img src="/profile/profile.png" alt="me-logo" />
            </div>
            {
            !menu?
            <Menu color='black' onClick={()=>setMenu(true)}/>:
            <X  color='black' onClick={()=>setMenu(false)}/>
            }
           </div>
        </div>
            
        <div className={`md:hidden mx-12 overflow-hidden transition-all duration-500 ease-in
    ${menu ? 'max-h-100 opacity-100' : 'max-h-0 opacity-0'}
  `}>
            <div className='bg-secondary p-10 '>
                <div >
                    <ul className='flex flex-col gap-8 items-center'>
                <li>
                <Link data-scroll="#aboutme" onClick={handleLink} className='text-white text-md font-secondary font-medium'>
                    About Me
                </Link>
                </li>
                <li>
                   <Link data-scroll="#project" onClick={handleLink} className='text-white text-md font-secondary font-medium'>
                    Projects
                </Link>
                </li>
                <li>
                   <Link data-scroll="#gallery" onClick={handleLink} className='text-white text-md font-secondary font-medium'>
                    Gallery
                </Link>
                </li>
                <Button content={"Let's Talk"} onClick={handleMail} className={'bg-white text-secondary'}/>
            </ul>
                </div>
            </div>
        </div>

    </nav>
  )
}

export default NavBar