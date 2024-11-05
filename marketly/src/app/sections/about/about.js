import React from 'react'

const about = () => {
  return (
    <>
        <div className='h-[100vh] my-20'>
            <div className='h-[90vh]'>
                <div className='ml-36'>
                    <h1 className=' text-9xl uppercase '>Lead your</h1>
                    <h1 className=' text-9xl uppercase font-bold'>business to <br/> growth</h1>
                </div>
                <div className=' mt-20 px-20 w-[80vw] bg-green-600 h-[35%] rounded-3xl mx-auto flex justify-between -rotate-12'>
                    <div className='rotate-12  bg-transparent flex justify-center items-center'><h1 className='bg-transparent uppercase text-3xl font-bold text-left'>Paid <br /> Advertising</h1></div>
                    <div className='rotate-12 bg-transparent flex justify-center items-center'><h1 className='text-3xl font-bold bg-transparent uppercase'>social media<br />management</h1></div>
                    <div className='rotate-12 bg-transparent flex justify-center items-center'><h1 className='text-3xl font-bold bg-transparent uppercase'>SEO</h1></div>
                </div>
                </div>
        </div>
    </>
  )
}

export default about