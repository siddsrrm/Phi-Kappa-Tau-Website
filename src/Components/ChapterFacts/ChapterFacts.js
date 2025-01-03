import React from 'react'
import * as styles from './ChapterFacts.module.css'

export const ChapterFacts = () => {
    const facts = [
        {title: 'Founded in', value: '1920'},
        {title: 'Chapter Gpa', value: '3.3'},
        {title: 'Active Members', value: '100'},
        {title: 'Alumni Network', value: '500+'},
    ]
  
    return (
        <div className={styles.factsContainer}>
            {facts.map((fact, index) => (
                <div key={index} className={styles.factCircle}>
                    <div className={styles.factTitle}>{fact.title}</div>
                    <div className={styles.factValue}>{fact.value}</div>
                </div>
            ))}
        </div>
    )
}
