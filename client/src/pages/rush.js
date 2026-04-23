import React from 'react'
import Head from 'next/head'
import { Navbar } from "../Components/Navbar/Navbar"
import { RushForm } from '../Components/RushForm/RushForm'
import { Footer } from '../Components/Footer/Footer'

const rush = () => {
  return (
    <div>
        <Head>
          <title>Rush | Phi Kappa Tau Purdue</title>
        </Head>
        <Navbar />
        <RushForm />
        <Footer />
    </div>
  )
}

export default rush