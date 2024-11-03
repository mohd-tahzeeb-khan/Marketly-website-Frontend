import React from 'react'
import Image from 'next/image'
import pairoftriangle from '../../../../public/images/pair of triangle.png'
const home = () => {
  return (
    <>
        <div className='w-full h-[100vh] bg-transparent relative'>
            <div className='w-36 h-48 bg-white absolute left-[50%] top-[40%] flex flex-col p-8 justify-center align-bottom -z-10'>
                <Image className='bg-transparent w-[60px] h-[60px]' src={pairoftriangle} height={100} width={100} alt='Image'></Image>
                <Image className='bg-transparent w-[60px] h-[60px]' src={pairoftriangle} height={100} width={100} alt='Image'></Image>

            </div>
            <div className='mx-auto w-5/6 h-[50vh]  uppercase flex flex-col justify-end items-center bg-transparent z-1'>
                <h1 className='text-colorblack font-extrabold text-6xl bg-transparent'>I think your</h1>
                <h1 className='text-colorblack font-extrabold text-6xl bg-transparent'>Business find seo</h1>
                <h1 className='text-colorblack font-extrabold text-6xl bg-transparent'>SOlution...</h1>
            </div>
            <div className='w-1/5 mx-auto my-10 text-left flex flex-col'>
                <p >We Create a Custom Solutions and plans for the business to excel in the market and Maximize the profit and minimize the Cost.</p>
                <div className='flex justify-between mt-5 uppercase' >
                    <div className='bg-colorbrown ml-3 w-1/2 p-3 text-lg text-black rounded-full text-center items-center'>All services</div>
                    <div className=' ml-3 w-1/2 p-4 text-lg text-black'>Our cLeints</div>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default home