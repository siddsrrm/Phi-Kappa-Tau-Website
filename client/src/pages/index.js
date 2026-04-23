import * as React from "react"
import Head from "next/head"
import { Navbar } from "../Components/Navbar/Navbar"
import {HomePageStart} from "../Components/HomePageStart/HomePageStart"
import { WhyPKT } from "../Components/WhyPKT/WhyPKT"
import { ChapterFacts } from "../Components/ChapterFacts/ChapterFacts"
import { Footer } from "../Components/Footer/Footer"


const IndexPage = () => {
  return (
    <section>
        <Head>
          <title>Phi Kappa Tau Purdue</title>
        </Head>
        <Navbar />
        <HomePageStart />
        <WhyPKT />
        <ChapterFacts />
        <Footer />
    </section>
  )
}

export default IndexPage
