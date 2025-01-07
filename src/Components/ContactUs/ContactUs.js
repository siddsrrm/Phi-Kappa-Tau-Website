import React from 'react'
import * as styles from './ContactUs.module.css'
import instaLogo from '../../Images/instaPng.png'

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
            <span>President:</span>
            <span>James Underwood</span>
            <span>(510) 859 6884</span>

            <div className={styles.rush}>
                <span>Rush Chairs:</span>
                <span>Aditya Kumar</span>
                <span>(201) 639 1114</span>

                <span>Dylan Patel</span>
                <span>(732) 570 3545</span>
            </div>
            
        </div>
    </div>
    
  )
}
