import React from 'react'
import * as styles from './Navbar.module.css'
import { useState } from 'react'
import logo from '../../Images/logo.png'


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
        </div>
        <ul className={styles.navItems}>
            <li>
                <a href="#home">Home</a>
            </li>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#experience">Experience</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li> 
        </ul>            
    </nav>
  )
}
