import React from 'react'
import * as styles from './HomePageStart.module.css'
import chapPhoto from '../../Images/chapterPhoto.jpg'
import Link from 'next/link'
import { useInView } from "../../hooks/useInView"

export const HomePageStart = () => {
  const { ref, inView } = useInView({ threshold: 0.25 })

  return (
    <section ref={ref} className={`${styles.container} ${inView ? styles.inView : ''}`}>
      <div className={styles.imgWrap}>
        <img src={chapPhoto} alt="Lambda Chapter members" className={styles.img}/>
        <div className={styles.glow} aria-hidden="true" />
      </div>
      <div className={styles.redBackground}>
        <p className={styles.kicker}>Purdue University</p>
        <h2 className={styles.title}>Lambda Chapter</h2>
        <p className={styles.subtitle}>
          An engineering-minded brotherhood focused on building leaders—on campus and
          in your career.
        </p>

        <div className={styles.chips}>
          <span className={styles.chip}>Builders</span>
          <span className={styles.chip}>Leadership</span>
          <span className={styles.chip}>Service</span>
          <span className={styles.chip}>Alumni Network</span>
        </div>

        <Link href="/contact">
            <button className={styles.button}>Connect With Us</button>
        </Link>
      </div>
    </section>
  )
}


