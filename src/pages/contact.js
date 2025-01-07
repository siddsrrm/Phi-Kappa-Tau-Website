import React from 'react'
import { Navbar } from "../Components/Navbar/Navbar"
import { ContactUs } from '../Components/ContactUs/ContactUs'
import { Footer } from '../Components/Footer/Footer'

const contact = () => {
  return (
    <div>
        <Navbar />
        <ContactUs />
        <Footer />
    </div>
  )
}

export default contact