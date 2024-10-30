import * as React from "react"
import { Navbar } from "../Components/Navbar/Navbar"
import {ChapterPhoto} from "../Components/ChapterPhoto/chapterPhoto"
import '../index.css'


const IndexPage = () => {
  return (
    <section>
        <Navbar />
        <ChapterPhoto />
    </section>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>