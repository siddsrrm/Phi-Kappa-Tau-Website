import React, { useEffect, useState } from 'react'
import { Navbar } from "../Components/Navbar/Navbar"
import { Footer } from '../Components/Footer/Footer'
import * as styles from './philanthropy.module.css'
import photoOne from '../Images/CorgiRace/DSC01560.jpg'
import photoTwo from '../Images/CorgiRace/DSC01571.jpg'
import photoThree from '../Images/CorgiRace/DSC01578.jpg'
import photoFour from '../Images/CorgiRace/DSC01624.jpg'
import photoFive from '../Images/CorgiRace/DSC01758.jpg'
import photoSix from '../Images/CorgiRace/DSC01798.jpg'

const Philanthropy = () => {
  const slides = [
    { src: photoOne, alt: "Corgi race crowd at Purdue" },
    { src: photoTwo, alt: "Corgis running on race day" },
    { src: photoThree, alt: "Purdue Corgi Race moment" },
    { src: photoFour, alt: "Dog owners at the Corgi Race" },
    { src: photoFive, alt: "Corgi Race event energy" },
    { src: photoSix, alt: "Corgi crossing the finish area" }
  ]
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length)
    }, 3500)

    return () => clearInterval(intervalId)
  }, [slides.length])

  const philanthropyContact = {
    name: "Philanthropy Chair (Add Name)",
    role: "Philanthropy Contact",
    email: "add-contact-email@purdue.edu"
  }

  return (
    <div className={styles.page}>
      <Navbar />

      <section className={styles.hero}>
        <p className={styles.kicker}>Phi Kappa Tau Philanthropy</p>
        <h1 className={styles.title}>Purdue Corgi Race for SeriousFun Children's Network</h1>
        <p className={styles.subtitle}>
          Every fall, we host the Corgi Race at the Purdue Grand Prix Track to raise money and awareness
          for SeriousFun Children's Network. The event is built for first-time attendees, loyal fans, and
          anyone ready to put their dog on the starting line.
        </p>
        <div className={styles.heroActions}>
          <a href="https://seriousfun.org/" target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>
            Learn About SeriousFun
          </a>
          <a href="https://www.instagram.com/purduecorgirace/" target="_blank" rel="noopener noreferrer" className={styles.secondaryBtn}>
            Follow @purduecorgirace
          </a>
        </div>
      </section>

      <section className={styles.infoGrid}>
        <article className={styles.infoCard}>
          <h3>New to the event?</h3>
          <p>
            Think of it as the most fun race weekend on campus: fast corgis, packed crowds, and a philanthropy mission that
            directly supports children with serious illnesses through SeriousFun camps and programs.
          </p>
        </article>

        <article className={styles.infoCard}>
          <h3>Want to watch?</h3>
          <p>
            Join us in the fall semester at the Grand Prix track. Bring friends, bring school spirit, and enjoy one of Purdue's
            most unique community events while supporting a great cause.
          </p>
        </article>

        <article className={styles.infoCard}>
          <h3>Want to add your dog?</h3>
          <p>
            Registration updates are posted first on our social pages. Follow us to catch signup details, deadlines, event-day info,
            and race requirements as soon as they drop.
          </p>
        </article>
      </section>

      <section className={styles.socialSection}>
        <h2>Join the Corgi Race Community</h2>
        <div className={styles.socialButtons}>
          <a href="https://www.instagram.com/purduecorgirace/" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
            Instagram: @purduecorgirace
          </a>
          <a href="https://www.facebook.com/purduecorgirace/" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
            Facebook: Purdue Corgi Race
          </a>
        </div>
      </section>

      <section className={styles.gallerySection}>
        <h2>Race Day Highlights</h2>
        <div className={styles.slideshow}>
          {slides.map((slide, idx) => (
            <img
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              className={`${styles.slideImage} ${idx === activeSlide ? styles.slideActive : ''}`}
            />
          ))}
        </div>
        <div className={styles.slideDots}>
          {slides.map((slide, idx) => (
            <button
              key={`${slide.src}-dot`}
              type="button"
              aria-label={`Show slide ${idx + 1}`}
              className={`${styles.dot} ${idx === activeSlide ? styles.dotActive : ''}`}
              onClick={() => setActiveSlide(idx)}
            />
          ))}
        </div>
      </section>

      <section className={styles.contactSection}>
        <h2>Philanthropy Contact</h2>
        <div className={styles.contactCard}>
          <p className={styles.contactRole}>{philanthropyContact.role}</p>
          <p className={styles.contactName}>{philanthropyContact.name}</p>
          <a href={`mailto:${philanthropyContact.email}`} className={styles.contactEmail}>
            {philanthropyContact.email}
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Philanthropy

export const Head = () => (
  <>
    <title>Philanthropy | Phi Kappa Tau Purdue</title>
  </>
)
