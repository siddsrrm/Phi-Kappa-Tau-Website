import React from 'react'
import Head from 'next/head'
import { Navbar } from "../Components/Navbar/Navbar"
import { Footer } from '../Components/Footer/Footer'
import { SignUp } from '../Components/SignUp/SignUp'


const alumni = () => {
  return (
    <div>
        <Head>
          <title>Alumni | Phi Kappa Tau Purdue</title>
        </Head>
        <Navbar />
        <SignUp />
        <Footer />
    </div>
  )
}

export default alumni