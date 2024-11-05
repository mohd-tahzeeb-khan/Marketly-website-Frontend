import Image from 'next/image'
import React from 'react'
import Medal from '../../../../public/images/created medal.png'
import Mixed from '../../../../public/images/mixed.png'
const stretergy = () => {
  return (
    <>
     <div className='h-[100vh] bg-webbackground grid grid-cols-1 grid-rows-5 gap-4 w-[90vw] mx-auto sm:grid-cols-2 sm:grid-rows-5 lg:grid-cols-3 lg:grid-rows-2'>
      <div className='1 rounded-xl bg-green-400 flex flex-col justify-center w-full'>
        <div className='mx-auto my-auto border-2 border-black rounded-full bg-transparent h-[50%] w-[35%] flex justify-center items-center font-bold text-2xl'>80%</div>
        <div className='bg-transparent mx-auto my-auto text-xl'>Strategy</div>
      </div>
      <div className='2 rounded-xl bg-white'><Image src={Medal} height={100} width={100} alt='image' className='bg-transparent pt-5 mx-auto sm:w-48 md:w-72'></Image></div>
      <div className='3 rounded-xl bg-blue-600 flex flex-col justify-center'>
        <div className='mx-auto my-auto border-2 border-white text-white rounded-full bg-transparent h-[50%] w-[35%] flex justify-center items-center font-bold text-2xl'>95%</div>
        <div className='bg-transparent mx-auto my-auto text-xl text-white'>Audience</div></div>
      <div className='4 rounded-xl bg-blue-600 col-span-2 flex flex-col justify-between py-[5%]'>
        <h1 className='bg-transparent uppercase text-center text-white font-bold'>why choose us</h1>
        <div className='flex justify-between mx-auto h-full bg-transparent'>
         <h1 className='font-semibold text-3xl bg-blue-600 uppercase pl-10 pt-10 w-[60%] text-white'>keyword, research Strategy, survey, & analytics</h1>
          <div className='h-[80%] w-[30%] bg-blue-200 mx-auto my-auto rounded-2xl ml-10 flex justify-end'>
            <Image src={Mixed} width={150} height={100} alt='images' className='bg-transparent'></Image>
            {/* <Image src={} width={100} height={100} alt='images'></Image> */}
          </div>
        </div>
      </div>
      {/* <div classNam rounded-xle='5 bg-purple-800'></div> */}
      <div className='6 rounded-xl bg-green-600 flex flex-col justify-center order-2 sm:order-2 md:order-4 lg:order-last' >
      <div className='mx-auto my-auto border-2 border-black rounded-full bg-transparent h-[50%] w-[35%] flex justify-center items-center font-bold text-2xl'>75%</div>
      <div className='bg-transparent mx-auto my-auto text-xl'>Keyword</div>

      </div>

     </div>
    </>
  )
}

export default stretergy