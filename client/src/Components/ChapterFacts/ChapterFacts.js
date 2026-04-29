import React from 'react'
import * as styles from './ChapterFacts.module.css'
import { useInView } from "../../hooks/useInView"

export const ChapterFacts = () => {
    const facts = [
        {title: 'Founded in', value: '1920'},
        {title: 'Chapter Gpa', value: '3.4'},
        {title: 'Active Members', value: '75'},
        {title: 'Alumni', value: '2600+'},
    ]

    const { ref, inView } = useInView({ threshold: 0.2 })
  
    return (
        <section ref={ref} className={`${styles.section} ${inView ? styles.inView : ''}`}>
            <p className={styles.kicker}>By The Numbers</p>
            <h1 className={styles.title}>Lambda Chapter</h1>
            <div className={styles.factsContainer}>
                {facts.map((fact, index) => (
                    <div key={index} className={styles.factCircle}>
                        <div className={styles.factTitle}>{fact.title}</div>
                        <div className={styles.factValue}>{fact.value}</div>
                    </div>
                ))}
            </div>
        </section>
        
    )
}
