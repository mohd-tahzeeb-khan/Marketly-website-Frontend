'use client'
import Home from './sections/landing/home'
import Card from './sections/cards/cards'
import Contact from './sections/contact/contact'
import Stretergy from './sections/stretergy/stretergy'
import Services from './sections/choose/choose'
import Aboutus from './sections/about/about'

import useWindowSize from './utils/usewindowScreen'

const Page = () => {
  const {width,height} = useWindowSize();
  if(width<1500){
    return(
    <div className='h-[100vh] flex justify-center items-center font-bold text-8xl text-justify p-20'> This Website can be Visible on Laptop or Desktop. This website is not developed for Mobile view or small screen views. (Not responsive)</div>
  )}else{
  return (
   <>
    
   <Home />
   <Card />
   <Aboutus />
   <Services />
   <Stretergy />
   <Contact />
   </>
    )}
}

export default Page