'use client'
import React, { useState } from 'react'
import "./style.css";
import useMousePosition from '../utils/useMousePosition';
import {delay, motion} from 'framer-motion'
import Link from 'next/link';
import Header from './header';
const footer = () => {
  const [IsHovered, setIsHovered] = useState(false)
  const {x, y}=useMousePosition();
  const size=350;
    return (
    <>
    <div className='mt-0 bg-colorgreen h-[70vh] w-[90vw] mx-auto rounded-br-3xl rounded-bl-3xl mb-2'>
        <div className='bg-transparent flex justify-around h-[60vh]'>
            <div className='bg-slate-700 h-[60vh] w-1/2'>1</div>
            <div className='bg-slate-500 h-[60vh] w-1/2 relative' >
              <div  className='h-full w-full flex justify-center flex-col px-10 bg-colorblack text-center'><h1 className='text-3xl font-extrabold bg-transparent text-webbackground '>Hover Me!</h1>
              <h1 className='text-3xl font-extrabold bg-transparent text-webbackground '>Connect with us on Socail Media</h1></div>
              <motion.div  animate={
              {WebkitMaskPosition: `${x-size/2}px ${y-size/2}px`,
              WebkitMaskSize: IsHovered?`${size}px` :"0px"
            }
              } 
              transition={
                {type:"tween", ease:"backOut", duration:0.5}
              
                } onMouseEnter={()=>{setIsHovered(true)}} onMouseLeave={()=>{setIsHovered(false)}}  className='mask absolute w-full h-full top-0 left-0 px-10'>
              
                  <div className='2 w-full h-full bg-transparent flex flex-col'><div className='left flex flex-col bg-transparent'>
                  <Link className='text-xl font-bold px-10 pt-4 bg-transparent hover:scale-105 hover:duration-150 w-1/2' href={""}>Instagram</Link>
                  <Link className='text-xl font-bold px-10 pt-4 bg-transparent hover:scale-105 hover:duration-150 w-1/2' href={""}>Meta</Link>
                  <Link className='text-xl font-bold px-10 pt-4 bg-transparent hover:scale-105 hover:duration-150 w-1/2' href={""}>Gmail</Link>
                  <Link className='text-xl font-bold px-10 pt-4 bg-transparent hover:scale-105 hover:duration-150 w-1/2' href={""}>Youtube</Link>
                  <Link className='text-xl font-bold px-10 pt-4 bg-transparent hover:scale-105 hover:duration-150 w-1/2' href={""}>LinkedIn</Link></div>
                  <div className='left'><Header /></div></div>
              </motion.div>
            </div>      
        </div>
        <div className='h-[10vh] bg-transparent'>
          <div className='bg-transparent'>Tahzeeb</div>
        </div>
        

    </div>
    </>
  )
}

export default footer