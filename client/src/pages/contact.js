import React from 'react'
import Head from 'next/head'
import { Navbar } from "../Components/Navbar/Navbar"
import { ContactUs } from '../Components/ContactUs/ContactUs'
import { Footer } from '../Components/Footer/Footer'

const contact = () => {
  return (
    <div>
        <Head>
          <title>Contact | Phi Kappa Tau Purdue</title>
        </Head>
        <Navbar />
        <ContactUs />
        <Footer />
    </div>
  )
}

export default contact