import React from 'react'
import * as styles from './Navbar.module.css'
import logo from '../../Images/logo.png'
import instaLogo from '../../Images/instaPng.png'
import { Link } from 'gatsby'


export const Navbar = () => {
  return (
    <nav className={styles.navbar}> 
        <div className={styles.logoContainer}>
            <img src={logo} alt='logo' className={styles.logoImg}/>
            <div>
                <h1 className={styles.name}>PHI KAPPA TAU</h1>
                <h1 className={styles.schoolName}>Purdue</h1>
            </div>

        </div>
        
        <ul className={styles.navItems}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/rush">Rush</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li> 
            <a href="https://www.instagram.com/phitau_purdue/" target="_blank" rel="noopener noreferrer" className={styles.insta}>
                <img src={instaLogo} alt="Github icon" className={styles.instaImg}/>
            </a>
        </ul>            
    </nav>
  )
}
