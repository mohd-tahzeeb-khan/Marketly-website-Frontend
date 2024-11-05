import React from 'react'
import Home from './sections/landing/home'
import Card from './sections/cards/cards'
import Contact from './sections/contact/contact'
import Stretergy from './sections/stretergy/stretergy'
import Services from './sections/choose/choose'
const page = () => {
  return (
   <>
  
   <Home />
   <Card />
   <Services />
   <Stretergy />
   <Contact />
   </>
  )
}

export default page