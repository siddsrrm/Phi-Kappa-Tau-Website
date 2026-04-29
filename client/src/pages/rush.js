import React from 'react'
import { Navbar } from "../Components/Navbar/Navbar"
import { RushForm } from '../Components/RushForm/RushForm'
import { Footer } from '../Components/Footer/Footer'

const rush = () => {
  return (
    <div>
        <Navbar />
        <RushForm />
        <Footer />
    </div>
  )
}

export default rush