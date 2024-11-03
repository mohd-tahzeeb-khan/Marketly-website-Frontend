import Image from 'next/image'
import React from 'react'
import logo from '../../../public/images/logo.png'
import { Roboto_Slab_font, Roboto_Slab_font_bold } from '../font'
import Link from 'next/link'

const header = () => {
  
  return (
    <>
    
    <div className='flex justify-between px-10 pt-3 pb-3 bg-transparent h-[10vh] mt-5'>
        <div className='logo flex justify-center align-middle items-center'><Image width={120} height={120} alt='Logo...' src={logo}></Image>
        <h2 className={`${Roboto_Slab_font_bold.className} text-2xl pt-3 text-colorblack ml-6`}>Marketly</h2></div>        
        <div className='navbar flex justify-between uppercase bg-colorgreen items-center rounded-full px-5'>
            <Link href={''} className='p-5 bg-transparent text-slate-300 font-bold text-[15px] hover:text-white hover:scale-110 hover:duration-150 '>home</Link>
            <Link href={''} className='p-5 bg-transparent text-slate-300 font-bold text-[15px] hover:text-white hover:scale-110 hover:duration-150 '>about</Link>
            <Link href={''} className='p-5 bg-transparent text-slate-300 font-bold text-[15px] hover:text-white hover:scale-110 hover:duration-150 '>Cetogires</Link>
            <Link href={''} className='p-5 bg-transparent text-slate-300 font-bold text-[15px] hover:text-white hover:scale-110 hover:duration-150 '>Plans & Prices</Link>
        </div>
        <div className='contactus uppercase hover:scale-105 hover:duration-150'><Link href={''} className='p-3 bg-colorbrown rounded-full text-[#e3e3e3] font-bold text-[15px] hover:text-white'>Contact Us</Link></div>

    </div>
    </>
  )
}

export default header