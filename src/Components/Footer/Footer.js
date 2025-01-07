import React from 'react'
import * as styles from './Footer.module.css'
import logo from '../../Images/logo.png'


export const Footer = () => {
  return (
    <footer className={styles.container}>
        <div className={styles.titleAddress}> 
            <h3 className={styles.name}>Purdue Phi Tau</h3>
            <div className={styles.address}>
                <span className={styles.text}> 416 N Chauncey Avenue</span>
                <span className={styles.text}> West Lafayette, IN 47906</span>
            </div>
        </div>
        
            
        <div className={styles.img}>
            <img src={logo} alt='logo' className={styles.logoImg}/>
        </div>

        <div className={styles.media}>
            <h3 className={styles.follow}>Follow</h3>
            <div className={styles.links}>
                <a href="https://www.instagram.com/phitaupurdue/" target="_blank" rel="noopener noreferrer">
                    Instagram
                </a>
                <a href="https://www.facebook.com/LambdaPKT/" target="_blank" rel="noopener noreferrer">
                    Facebook
                </a>
            </div>
        </div>
    </footer>
  )
}
