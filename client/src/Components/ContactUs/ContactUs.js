import React from 'react'
import * as styles from './ContactUs.module.css'

export const ContactUs = () => {
  const contacts = [
    {
      role: "President",
      people: [{ name: "Easton Clark", major: "Aerospace Engineering '28", phone: "(507) 217-9968", email: "president.phitaupurdue@gmail.com" }]
    },
    {
      role: "Vice President",
      people: [{ name: "Brendan Costello", major: "Mechanical Engineering '28" }]
    },
    {
      role: "Treasurer",
      people: [{ name: "Michael Ricks", major: "Geology and Geophysics '28", email: "treasurer.phitaupurdue@gmail.com" }]
    },
    {
      role: "Risk Manager",
      people: [{ name: "Nick Castellana", major: "Chemical Engineering '28"}]
    },
    {
      role: "House Manager",
      people: [{ name: "Evan Bucklew", major: "Mechanical Engineering '28"}]
    },
    {
      role: "Alumni Relations",
      people: [{ name: "Matthew Rodgers", major: "Electrical Engineering '28"}]
    },
    {
      role: "Rush Director",
      people: [
        { name: "Jason Klutho", major: "Computer Engineering '27", phone: "(314) 835-8255" },
      ]
    },
    {
      role: "Philanthropy",
      people: [{ name: "Alex Colucci", major: "Mechanical Engineering '29"}]
    }
  ]

  return (
    <div>
      <div className={styles.topContainer}>
        <h2 className={styles.header}>Contact Us</h2>
        <span className={styles.middleText}>
          Reach out to our executive team directly with questions about rush, life as an active, or anything else about Phi Kappa Tau.
        </span>
      </div>

      <div className={styles.bottomContainer}>
        <h2 className={styles.sectionHeader}>Executive Contacts</h2>

        <div className={styles.cardGrid}>
          {contacts.map((group) => (
            <article key={group.role} className={styles.card}>
              <h3 className={styles.cardTitle}>{group.role}</h3>

              <div className={styles.peopleList}>
                {group.people.map((person) => (
                  <div key={`${group.role}-${person.name}`} className={styles.person}>
                    <span className={styles.personName}>{person.name}</span>
                    <span className={styles.major}>{person.major}</span>
                    {person.phone && (
                      <a className={styles.phone} href={`tel:${person.phone.replace(/[^\d]/g, '')}`}>
                        {person.phone}
                      </a>
                    )}
                    {person.email && (
                      <a className={styles.email} href={`mailto:${person.email}`}>
                        {person.email}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
