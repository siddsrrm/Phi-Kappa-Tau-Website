import React from 'react'
import { Navbar } from "../Components/Navbar/Navbar"
import { Footer } from '../Components/Footer/Footer'
import * as styles from './house.module.css'
import housePhoto from '../Images/416.png'

const HousePage = () => {
  return (
    <div className={styles.page}>
      <Navbar />

      <section className={styles.hero}>
        <div className={`${styles.heroText} ${styles.reveal}`} style={{ '--delay': '80ms' }}>
          <p className={styles.kicker}>Phi Kappa Tau House</p>
          <h1 className={styles.title}>Live in the heart of Chauncey</h1>
          <p className={styles.subtitle}>
            Our house is steps away from Purdue engineering buildings and surrounded by
            great restaurants and neighborhood spots. It is a convenient home base for
            classes, chapter life, and campus involvement.
          </p>
          <a
            className={styles.addressCard}
            href="https://maps.google.com/?q=416+N+Chauncey+Ave,+West+Lafayette,+IN+47906"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
          >
            <span aria-hidden="true">📍</span>
            416 N Chauncey Ave, West Lafayette, IN 47906
          </a>
        </div>

        <img
          src={housePhoto}
          alt="Phi Kappa Tau house at 416 N Chauncey Ave"
          className={`${styles.heroImage} ${styles.reveal}`}
          style={{ '--delay': '170ms' }}
        />
      </section>

      <section className={styles.content}>
        <div className={styles.grid}>
          <article className={`${styles.card} ${styles.reveal}`} style={{ '--delay': '220ms' }}>
            <h3>Flexible and affordable housing</h3>
            <p>
              We offer affordable, convenient housing plans by semester instead of locking
              members into full-year leases. That flexibility helps when you are planning
              study abroad, co-ops, or trying to avoid paying for summer months you are
              not in West Lafayette.
            </p>
          </article>

          <article className={`${styles.card} ${styles.reveal}`} style={{ '--delay': '300ms' }}>
            <h3>No live-in requirement</h3>
            <p>
              There is no live-in requirement, which gives members more freedom with their
              housing timeline. You can still be fully involved while pursuing options like
              becoming an RA or choosing a different housing setup.
            </p>
          </article>

          <article className={`${styles.card} ${styles.reveal}`} style={{ '--delay': '380ms' }}>
            <h3>Chef-prepared meals</h3>
            <p>
              Our personal chef provides 10 meals each week, Monday through Friday,
              making daily life easier and helping members stay focused on academics,
              professional growth, and chapter commitments.
            </p>
          </article>

          <article className={`${styles.card} ${styles.reveal}`} style={{ '--delay': '460ms' }}>
            <h3>Renovated study spaces</h3>
            <p>
              Our recently renovated library and study area includes two high-performance
              computers plus a deep collection of class resources and previous coursework
              knowledge to support academic success.
            </p>
          </article>
        </div>

        <div className={`${styles.highlights} ${styles.reveal}`} style={{ '--delay': '540ms' }}>
          <h3>Why this location works</h3>
          <ul>
            <li>Close to major engineering buildings on campus</li>
            <li>In the center of the Chauncey neighborhood</li>
            <li>Near restaurants and student-friendly amenities</li>
            <li>Designed to balance convenience, academics, and chapter life</li>
          </ul>
        </div>

        <div className={`${styles.contactCard} ${styles.reveal}`} style={{ '--delay': '620ms' }}>
          <h3>House Manager Contact</h3>
          <p className={styles.contactName}>Evan Bucklew</p>
          <p className={styles.contactMajor}>Mechanical Engineering '28</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default HousePage

export const Head = () => (
  <>
    <title>House & Location | Phi Kappa Tau Purdue</title>
  </>
)
