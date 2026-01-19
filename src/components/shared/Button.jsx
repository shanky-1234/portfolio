import React from 'react'

function Button({content,className,props}) {
  return (
    <button className={`${className} p-2 rounded-lg `} {...props}>
                   <a href="#_" class="relative inline-block text-lg group">
    <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-main transition-colors duration-300 ease-out border-2 border-main rounded-lg group-hover:text-white">
        <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
        <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-main group-hover:-rotate-180 ease"></span>
        <span class="relative">{content}</span>
    </span>
    <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-main rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</a> 
    </button>
  )
}

export default Button