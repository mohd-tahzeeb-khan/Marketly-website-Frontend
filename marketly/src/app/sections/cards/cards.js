import React from 'react'
import Image from 'next/image'
import mobileiamge from '../../../../public/images/moible image.png'
import mixedimage from '../../../../public/images/mixed.png'
import mixedimage2 from '../../../../public/images/mixed2.png'
const cards = () => {
  return (
    <>
    <div className='flex mx-auto w-[90vw] h-[78vh]'>

        <div className='cards rounded-3xl  mx-2 px-16 py-9 my-5 w-1/3 text-colorblack bg-yellow-400'>
            <h3 className='font-extrabold bg-transparent'>Seo</h3>
            <h3 className='font-extrabold bg-transparent'>Consultancy</h3>
            <div className='p-6 bg-white rounded-3xl'>

              <Image className='py-5 bg-transparent' src={mixedimage} height={150} width={150} alt='Image'></Image>
            </div>
            <p className='bg-transparent'>SEO, or Search Engine Optimization, is the practice of improving the visibility of a website or webpage in search engine results pages (SERPs).</p>
        </div>
        <div className='cards rounded-3xl  mx-2 px-9 py-9 my-5 w-1/3 bg-colorbrown'>
            <Image className='h-full bg-transparent' src={mobileiamge} height={200} width={500} alt='Image'></Image>
        </div>
        <div className='cards rounded-3xl mx-2 px-9 py-9 my-5 w-1/3 bg-white'>
            <h4 className='bg-transparent'>Socail Media</h4>
            <h4 className='bg-transparent'>Marketing</h4>
            <div className='p-5 bg-slate-300'>

              <Image className='bg-transparent m-9' src={mixedimage2} height={200} width={200} alt='Image'></Image>
            </div>
            <p className='bg-transparent'>Social media has revolutionized the way businesses connect with their target audience. It offers a unique platform to build brand awareness, engage with customers, and drive sales.</p>
        </div>
    </div>
    </>
  )
}

export default cards