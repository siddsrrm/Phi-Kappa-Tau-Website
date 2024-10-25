import React from 'react'
import * as styles from './Navbar.module.css'
import { useState } from 'react'
import logo from '../../Images/logo.png'
import instaLogo from '../../Images/instaPng.png'


export const Navbar = () => {
    const [fix, setFix] = useState(false)

    function setFixed() {
        if (window.scrollY >= 10) {
            setFix(true)
        }
        else {
            setFix(false)
        }
    }

    window.addEventListener("scroll", setFixed)
  return (
    <nav className={fix ? styles.navbarFixed : styles.navbar}> 
        <div className={styles.logoContainer}>
            <img src={logo} alt='logo' className={styles.logoImg}/>
            <div>
                <h1 className={styles.name}>PHI KAPPA TAU</h1>
                <h1 className={styles.schoolName}>Purdue</h1>
            </div>

        </div>
        
        <ul className={styles.navItems}>
            <li>
                <a href="#home">Home</a>
            </li>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#rush">Rush</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li> 
            <a href="https://www.instagram.com/phitau_purdue/" target="_blank" rel="noopener noreferrer">
                <img src={instaLogo} alt="Github icon" className={styles.instaImg}/>
            </a>
        </ul>            
    </nav>
  )
}
