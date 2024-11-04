import { useState, useEffect } from "react";

export default function useMousePosition(){
    const [mousePosition, setmousePosition] = useState({x:0, y:0})
    const updateMousePosition=(e)=>{
        
          setmousePosition({x:e.offsetX, y:e.offsetY})         
        console.log(mousePosition)

    }
    useEffect(() => {
      window.addEventListener('mousemove', updateMousePosition)

    
      return () => {
        window.removeEventListener("mousemove",updateMousePosition)
      }
    }, [updateMousePosition])

    return mousePosition
    
}