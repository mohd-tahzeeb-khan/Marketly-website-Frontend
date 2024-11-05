import { useState, useEffect } from "react";

export default function useMousePosition(){
    const [mousePosition, setmousePosition] = useState({x:0, y:0})
    useEffect(() => {
      const updateMousePosition=(e)=>{
        
          setmousePosition({x:e.offsetX, y:e.offsetY})         
        console.log(mousePosition)

    }
    
      window.addEventListener('mousemove', updateMousePosition)

    
      return () => {
        window.removeEventListener("mousemove",updateMousePosition)
      }
    })

    return mousePosition
    
}