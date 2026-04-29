import * as React from "react"
import { Navbar } from "../Components/Navbar/Navbar"
import {HomePageStart} from "../Components/HomePageStart/HomePageStart"
import { WhyPKT } from "../Components/WhyPKT/WhyPKT"
import { ChapterFacts } from "../Components/ChapterFacts/ChapterFacts"
import { Footer } from "../Components/Footer/Footer"
import '../index.css'


const IndexPage = () => {
  return (
    <section>
        <Navbar />
        <HomePageStart />
        <WhyPKT />
        <ChapterFacts />
        <Footer />
    </section>
  )
}

export default IndexPage

export const Head = () =>
  <>
    <title>Phi Kappa Tau Purdue</title>
  </> 
