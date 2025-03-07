import React from 'react'
import * as styles from './ContactUs.module.css'

export const ContactUs = () => {
  return (
    <div>
        <div className={styles.topContainer}>
            <h2 className={styles.header}>Contact Us</h2>
            <span className={styles.middleText}>Please feel free to contact us. 
                We are happy to answer questions about rush, 
                life as an active, and any other inquiries via email. 
            </span>
            <span className={styles.middleText}>purduephitau@gmail.com</span>
        </div>

        <div className={styles.bottomContainer}>
            <h2 style={{ "font-size": "45px" }}>Additional Contact</h2>

            <div className={styles.info}>
                <span>President:</span>
                <span>James Underwood</span>
                <span style={{ "font-weight": "bold"}}>(510) 859 6884</span>

                <div className={styles.rush}>
                    <span>Rush Chairs:</span>
                    <span>Aditya Kumar</span>
                    <span style={{ "font-weight": "bold"}}>(201) 639 1114</span>

                    <span>Dylan Patel</span>
                    <span style={{ "font-weight": "bold"}}>(732) 570 3545</span>
                </div>
            </div>
            
            
        </div>
    </div>
    
  )
}
