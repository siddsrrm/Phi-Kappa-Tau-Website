import * as React from "react"
import { Navbar } from "../Components/Navbar/Navbar"
import '../index.css'


const IndexPage = () => {
  return (
    <section>
        <Navbar />
    </section>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>