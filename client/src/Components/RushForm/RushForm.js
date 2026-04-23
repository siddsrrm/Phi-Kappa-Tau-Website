import React from 'react'
import * as styles from './RushForm.module.css'
import Link from 'next/link'

export const RushForm = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.hero}>
        <p className={styles.kicker}>Rush Phi Kappa Tau</p>
        <h1 className={styles.title}>Why an engineering fraternity?</h1>
        <p className={styles.subtitle}>
          Build the habits, network, and confidence that help you stand out in class,
          in interviews, and in college life.
        </p>
      </div>

      <div className={styles.grid}>
        <article className={styles.card}>
          <h2 className={styles.cardTitle}>Professional Growth</h2>
          <ul className={styles.list}>
            <li>Mentorship from members and alumni in engineering internships and full-time roles.</li>
            <li>Resume support, interview prep, and practical career advice from people who have done it.</li>
            <li>Leadership experience through committees, planning events, and managing real chapter operations.</li>
            <li>A strong accountability culture that helps you stay consistent academically and professionally.</li>
          </ul>
        </article>

        <article className={styles.card}>
          <h2 className={styles.cardTitle}>Social Growth</h2>
          <ul className={styles.list}>
            <li>A built-in community of driven students who challenge and support each other.</li>
            <li>Lasting friendships built through shared goals, traditions, and experiences.</li>
            <li>A healthier college balance through social events, service, and brotherhood.</li>
            <li>A network that continues beyond Purdue and into your career.</li>
          </ul>
        </article>
      </div>

      <div className={styles.ctaSection}>
        <p className={styles.ctaText}>
          Interested in learning more about rush and meeting the chapter?
        </p>
        <Link href="/contact" className={styles.ctaButton}>
          Contact the Chapter
        </Link>
      </div>
    </section>
  )
}
