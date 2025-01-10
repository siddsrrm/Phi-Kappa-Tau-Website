import React, { useState, useEffect } from 'react';
import * as styles from './Navbar.module.css';
import logo from '../../Images/logo.png';
import instaLogo from '../../Images/instaPng.png';
import { Link } from 'gatsby';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add(styles.noScroll);
    } else {
      document.body.classList.remove(styles.noScroll);
    }
  }, [isMenuOpen]);

  return (
    <nav className={styles.navbar}>
      {/* Logo Section */}
      <div className={styles.logoContainer}>
        <img src={logo} alt="logo" className={styles.logoImg} />
        <div>
          <h1 className={styles.name}>PHI KAPPA TAU</h1>
          <h1 className={styles.schoolName}>Purdue</h1>
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
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="/rush" onClick={closeMenu}>
            Rush
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>
        <a
          href="https://www.instagram.com/phitaupurdue/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.insta}
          onClick={closeMenu}
        >
          <img src={instaLogo} alt="Instagram icon" className={styles.instaImg} />
        </a>
      </ul>
    </nav>
  );
};
