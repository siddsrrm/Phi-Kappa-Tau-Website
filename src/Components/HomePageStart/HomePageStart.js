import React from 'react'
import * as styles from './HomePageStart.module.css'
import chapPhoto from '../../Images/chapterPhoto.jpg'
import { Link } from 'gatsby'

export const HomePageStart = () => {
  return (
    <div className={styles.container}>
      <img src={chapPhoto} alt="ChapterPhoto" className={styles.img}/>
      <div className={styles.redBackground}>
        <h2 className={styles.title}> Lambda Chapter</h2>
        <Link to="/contact">
            <button className={styles.button}>Connect</button>
        </Link>
      </div>
    </div>
  )
}


