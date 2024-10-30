import React from 'react'
import * as styles from './ChapterPhoto.module.css'
import chapPhoto from '../../Images/chapterPhoto.jpg'

export const ChapterPhoto = () => {
  return (
    <div className={styles}>
      <img src={chapPhoto} alt="ChapterPhoto" className={styles.img}/>
    </div>
  )
}


