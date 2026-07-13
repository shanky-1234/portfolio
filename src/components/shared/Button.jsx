import React from 'react'

function Button({content,className,props,onClick}) {
  return (
    <button className={`rounded-lg`} onClick={onClick} {...props}>
    <a href="#_" class={`relative inline-flex items-center w-full justify-center p-2 px-8 py-2 overflow-hidden ${className} font-medium text-white transition duration-1000 ease-out  rounded-full shadow-md group`}>
     <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-main group-hover:translate-x-0 ease">
         <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
     </span>
     <span class={`absolute flex items-center justify-center text-md w-full h-full ${className} font-secondary transition-all duration-300 text-md transform group-hover:translate-x-full ease`}>{content}</span>
     <span class="relative invisible">Button Text</span>
 </a>
    </button>
  )
}

export default Button