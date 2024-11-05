'use client'
import React, { useState } from 'react'
import "./style.css";
import useMousePosition from '../utils/useMousePosition';
import { motion} from 'framer-motion'
import Image from 'next/image';
import Link from 'next/link';

// <-- Importing All the SVG file for the Icons -->
import Logowithtext from '../../../public/images/logo with text.png';
import Instagram from '../../../public/images/icon/instagram.svg';
import Linkedin from '../../../public/images/icon/linkedin.svg';
import Quaro from '../../../public/images/icon/quaro.svg';
import Facebook from '../../../public/images/icon/facebook.svg';
import Telegram from '../../../public/images/icon/telegram.svg';
import Twitter from '../../../public/images/icon/twitterX.svg';
import Whatsapp from '../../../public/images/icon/whatsapp.svg';
const footer = () => {
  const [IsHovered, setIsHovered] = useState(false)
  const {x, y}=useMousePosition();
  const size=400;
    return (
    <>
    <div className='mt-0 bg-colorgreen h-[70vh] w-[90vw] mx-auto rounded-br-3xl rounded-bl-3xl mb-2'>
        <div className='bg-transparent flex justify-around h-[60vh]'>
            <div className='bg-colorgreen h-[60vh] w-1/2 pl-12 relative'>
              <Image className='p-5 rounded-full absolute bottom-8 left-28' src={Logowithtext} width={300} height={300} alt='Images'></Image>
            </div>
            <div className='bg-slate-500 h-[60vh] w-1/2 relative' >
              <div  className='h-full w-full flex justify-center flex-col px-10 bg-colorgreen text-center'><h1 className='text-3xl font-extrabold bg-transparent text-webbackground '>Hover Me!</h1>
              <h1 className='text-3xl font-extrabold bg-transparent text-webbackground '>Connect with us on Socail Media</h1></div>
              <motion.div  animate={
              {WebkitMaskPosition: `${x-size/2}px ${y-size/2}px`,
              WebkitMaskSize: IsHovered?`${size}px` :"0px"
            }
              } 
              transition={
                {type:"tween", ease:"backOut", duration:0.5}
              
                } onMouseEnter={()=>{setIsHovered(true)}} onMouseLeave={()=>{setIsHovered(false)}}  className='mask absolute w-full h-full top-0 left-0 px-10 bg-white'>
              
              <div className='w-full h-full  flex bg-white items-center justify-center gap-2' > 
                  <Link className='text-xl font-bold bg-transparent hover:scale-105 hover:duration-150 w-1/2'  href={""}><Image  className='bg-transparent' src={Whatsapp} width={200} height={200} alt='socail-Media-Icons'></Image></Link>
                  <Link className='text-xl font-bold bg-transparent hover:scale-105 hover:duration-150 w-1/2'  href={""}><Image  className='bg-transparent' src={Instagram} width={200} height={200} alt='socail-Media-Icons'></Image></Link>
                  <Link className='text-xl font-bold bg-transparent hover:scale-105 hover:duration-150 w-1/2'  href={""}><Image  className='bg-transparent' src={Telegram} width={200} height={200} alt='socail-Media-Icons'></Image></Link>
                  <Link className='text-xl font-bold bg-transparent hover:scale-105 hover:duration-150 w-1/2'  href={""}><Image  className='bg-transparent' src={Twitter} width={200} height={200} alt='socail-Media-Icons'></Image></Link>
                  <Link className='text-xl font-bold bg-transparent hover:scale-105 hover:duration-150 w-1/2'  href={""}><Image  className='bg-transparent' src={Facebook} width={200} height={200} alt='socail-Media-Icons'></Image></Link>
                  <Link className='text-xl font-bold bg-transparent hover:scale-105 hover:duration-150 w-1/2'  href={""}><Image  className='bg-transparent' src={Linkedin} width={200} height={200} alt='socail-Media-Icons'></Image></Link>
                  <Link className='text-xl font-bold bg-transparent hover:scale-105 hover:duration-150 w-1/2'  href={""}><Image  className='bg-transparent' src={Quaro} width={200} height={200} alt='socail-Media-Icons'></Image></Link>
                  </div>
              </motion.div>
            </div>      
        </div>
        <div className='h-[10vh] bg-transparent'>
          <div className='bg-transparent text-webbackground w-full h-full text-center pt-10 border-t-2'>The Website is Developed by Mohammad Tahzeeb Khan. || All Copyrights Reserved.</div>
        </div>
        

    </div>
    </>
  )
}

export default footer