import React from 'react'
import * as styles from './HomePageStart.module.css'
import chapPhoto from '../../Images/416new.png'
import { Link } from 'gatsby'
import { useInView } from "../../hooks/useInView"

export const HomePageStart = () => {
  const { ref, inView } = useInView({ threshold: 0.25 })

  return (
    <section ref={ref} className={`${styles.container} ${inView ? styles.inView : ''}`}>
      <div className={styles.redBackground}>
        <p className={styles.kicker}>Lambda Chapter at Purdue University est. 1920</p>
        <h2 className={styles.title}>Social Fraternity for Professional Engineers</h2>
        <p className={styles.subtitle}>
          With a long-standing history, we are Purdue's premier Engineering Fraternity with the motto:
          <br></br>
          <strong>Work Hard, Play Hard.</strong>
        </p>
        <Link to="/contact">
            <button className={styles.button}>Connect With Us</button>
        </Link>
      </div>
          <div className={styles.imgWrap}>
          <img src={chapPhoto} alt="Lambda Chapter members" className={styles.img}/>
          <div className={styles.glow} aria-hidden="true" />
        </div>
        </section>
  )
}


