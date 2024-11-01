import Image from 'next/image'
import React from 'react'
import logo from '../../../public/images/logo.png'

const header = () => {
  return (
    <>
    
    <div className='flex justify-around pt-3 pb-3 bg-transparent h-[10vh]'>
        <div className='logo '><Image width={200} height={100} alt='Logo...' src={logo}></Image> </div>        
        <div className='navbar flex justify-between uppercase bg-colorblack'>
            <div className='p-5'>home</div>
            <div className='p-5'>about</div>
            <div className='p-5'>Cetogires</div>
            <div className='p-5'>Plans & Prices</div>
        </div>
        <div className='contactus uppercase'>Contact Us</div>

    </div>
    </>
  )
}

export default header