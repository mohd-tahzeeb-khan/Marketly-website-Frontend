import React from 'react'
import Image from 'next/image'
import pairoftriangle from '../../../../public/images/pair of triangle.png'
const home = () => {
  return (
    <>
        <div className='w-full h-[100vh] bg-transparent relative'>
            
            <div className='mx-auto w-5/6 h-[50vh]  uppercase flex flex-col justify-end items-center bg-transparent z-1'>
                <h1 className='text-colorblack font-extrabold text-6xl bg-transparent'>I think your</h1>
                <h1 className='text-colorblack font-extrabold text-6xl bg-transparent'>Business find seo</h1>
                <h1 className='text-colorblack font-extrabold text-6xl bg-transparent'>SOlution...</h1>
            </div>
            <div className='w-1/5 mx-auto my-10 text-left flex flex-col'>
                <p >We Create a Custom Solutions and plans for the business to excel in the market and Maximize the profit and minimize the Cost.</p>
                <div className='flex justify-between mt-5 uppercase' >
                    <div className='flex justify-center items-center font-bold bg-colorbrown w-40 text-lg text-black rounded-full text-center hover:scale-105 hover:rotate-3 hover:border-2 hover:border-white hover:duration-150 hover:text-white hover:font-bold'><h1 className='items-center bg-transparent'>All Services</h1></div>
                    <div className='cursor-pointer ml-3 w-40 p-4 text-lg text-black hover:font-bold hover:scale-105'>Our cLeints</div>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default home