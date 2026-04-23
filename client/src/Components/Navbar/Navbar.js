import React, { useState, useEffect } from 'react';
import * as styles from './Navbar.module.css';
import logo from '../../Images/logo.png';
import instaLogo from '../../Images/instaPng.png';
import Link from 'next/link';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
      {/* Logo Section */}
      <div className={styles.logoContainer}>
        <img src={logo.src} alt="logo" className={styles.logoImg} />
        <div>
          <h1 className={styles.name}>PHI KAPPA TAU</h1>
          <p className={styles.schoolName}>Purdue Lambda Chapter</p>
        </div>
      </div>

      {/* Hamburger Menu for Small Screens */}
      <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
        <div className={`${styles.bar} ${isMenuOpen ? styles.barOpen : ''}`}></div>
        <div className={`${styles.bar} ${isMenuOpen ? styles.barOpen : ''}`}></div>
        <div className={`${styles.bar} ${isMenuOpen ? styles.barOpen : ''}`}></div>
      </button>

      {/* Menu Items */}
      <ul className={`${styles.navItems} ${isMenuOpen ? styles.menuOpen : ''}`}>
        <li>
          <Link href="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/alumni" onClick={closeMenu}>
            Alumni
          </Link>
        </li>
        <li>
          <Link href="/rush" onClick={closeMenu}>
            Rush
          </Link>
        </li>
        <li>
          <Link href="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>
        <li>
          <a
            href="https://www.instagram.com/phitaupurdue/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.insta}
            onClick={closeMenu}
          >
            <img src={instaLogo.src} alt="Instagram icon" className={styles.instaImg} />
          </a>
        </li>
      </ul>
    </nav>
  );
};
