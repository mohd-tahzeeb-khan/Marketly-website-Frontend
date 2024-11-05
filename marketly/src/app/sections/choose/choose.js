import Image from 'next/image'
import React from 'react'
import Triangle from '../../../../public/images/triangle.png'
const choose = () => {
  return (
    <>
        <div className='h-[110vh] w-[100vw] p-20 bg-colorgreen my-20 flex justify-between'>
            <div className='h-[90vh] w-[60vh] rounded-3xl bg-colorbrown flex flex-col'>
                <div className='relative'>
                    <Image className='absolute rotate-180 bg-transparent right-16 top-10' src={Triangle} width={100} height={100} alt='Image'></Image>
                    <Image className='absolute right-0 top-10 bg-transparent' src={Triangle} width={100} height={100} alt='Image'></Image>
                    <Image className='absolute right-5 rotate-180 bg-transparent' src={Triangle} width={100} height={100} alt='Image'></Image>
                </div>
                <div className=' bg-transparent mt-28'>
                    <h1 className='font-bold text-5xl text-left pl-10 bg-transparent uppercase'>full-</h1>
                    <h1 className='font-bold text-5xl text-left pl-10 bg-transparent uppercase'>Potential</h1>
                    <h1 className='font-bold text-5xl text-left pl-10 bg-transparent uppercase'>marketing</h1>
                    <h1 className='font-bold text-5xl text-left pl-10 bg-transparent uppercase'>servie</h1>
                </div>
                <div className='p-10 flex justify-around bg-transparent items-center'>
                    <h1 className='bg-black text-white rounded-full p-3'>1</h1>
                    <h3 className='uppercase font-bold text-xl bg-transparent'>research</h3>

                </div>
                <div className='p-10 flex justify-around bg-transparent items-center'>
                    <h1 className='bg-black text-white rounded-full p-3'>1</h1>
                    <h3 className='uppercase font-bold text-xl bg-transparent '>research</h3>

                </div>
                
            </div>
            <div className=' ml-[500px] bg-transparent mx-auto'>
                <Image className='bg-transparent h-60 rotate-180 -m-11 p-px' src={Triangle} height={100} width={250} alt='images'></Image>
                <Image className='bg-transparent h-60 rotate-90 ' src={Triangle} height={100} width={250} alt='images'></Image>
                <Image className='bg-transparent h-60 -m-11 pr-10' src={Triangle} height={100} width={250} alt='images'></Image>
            </div>
        </div>
    </>
  )
}

export default choose