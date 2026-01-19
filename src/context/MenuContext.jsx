import { createContext, useContext, useEffect, useState } from "react";

const MenuContext = createContext()

export const MenuProvider = ({children}) =>{
    const [menu,setMenu] = useState(false)
    useEffect(()=>{
        if(menu){
            document.body.style.overflow = "hidden"
        }
            document.body.style.overflow = "auto"
    },[])
    return (
        <MenuContext.Provider value={{menu,setMenu}}>
            {children}
        </MenuContext.Provider>
    )
}

export const UseMenu = () =>{
    return useContext(MenuContext)
}