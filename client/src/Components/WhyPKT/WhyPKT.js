import React from 'react'
import * as styles from './WhyPKT.module.css'
import { useInView } from "../../hooks/useInView"

export const WhyPKT = () => {
  const { ref, inView } = useInView({ threshold: 0.2 })

  return (
    <section ref={ref} className={`${styles.container} ${inView ? styles.inView : ''}`}>
      <p className={styles.kicker}>Engineering Focus</p>
      <h1 className={styles.title}>Build more than a resume</h1>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Brotherhood for builders</h3>
          <p className={styles.cardText}>
            A community that pushes you to ship—whether that’s leadership, academics,
            or real-world experience.
          </p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Career + mentorship</h3>
          <p className={styles.cardText}>
            Learn from alumni and older members who’ve done internships, co-ops, and
            full-time roles—and want to help you get there.
          </p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Impact that matters</h3>
          <p className={styles.cardText}>
            Service and philanthropy, but with an execution mindset: plan it, build it,
            run it, improve it.
          </p>
        </div>
      </div>

      <div className={styles.long}>
        <h3 className={styles.longTitle}>Why Phi Kappa Tau?</h3>
        <p className={styles.text}>
          Phi Kappa Tau at Purdue is a brotherhood built around personal growth, academic
          success, and community impact. You’ll find a supportive environment that reinforces
          accountability and leadership while connecting you with a network of alumni and mentors.
          If you’re the type of person who wants to build, improve, and lead—this is your place.
        </p>
      </div>
    </section>
  )
}