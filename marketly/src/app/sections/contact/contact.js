import React from 'react'

const contact = () => {
  return (
    <>
       
        <div className='w-[90vw] h-[50vh] mx-auto my-auto bg-colorgreen flex flex-col rounded-tl-3xl rounded-tr-3xl mb-52  mt-7'>
            <div className='bg-transparent'>
                <h1 className='text-white uppercase text-8xl bg-transparent pl-56'>Let's Make</h1>
                <h1 className='text-white uppercase text-8xl bg-transparent pl-56'>Something great!</h1>
            </div>
            <div className=' bg-transparent pl-60 mt-10'>
                <button className='bg-colorbrown text-white after:content-[">"] text-3xl p-6 rounded-full hover:scale-105 hover:duration-150 hover:bg-colorbrown'>Say H!     </button>
            </div>
        </div>
    </>
  )
}

export default contact