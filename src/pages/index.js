import * as React from "react"
import { Navbar } from "../Components/Navbar/Navbar"
import {HomePageStart} from "../Components/HomePageStart/HomePageStart"
import { WhyPKT } from "../Components/WhyPKT/WhyPKT"
import { ChapterFacts } from "../Components/ChapterFacts/ChapterFacts"
import '../index.css'


const IndexPage = () => {
  return (
    <section>
        <Navbar />
        <HomePageStart />
        <WhyPKT />
        <ChapterFacts />
    </section>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>