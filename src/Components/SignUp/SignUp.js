import React, {useState} from 'react'
import * as styles from './SignUp.module.css';


export const SignUp = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Participate in Our Network</h1>
        <h3 className={styles.header}>Sign up with your email to receive semester newsletters and stay updated on alumni events</h3>

        <form className={styles.form}>
            <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className={styles.input}
            required
            />
            <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className={styles.input}
            required
            />
            <input
            type="text"
            name="email"
            placeholder="Email"
            className={styles.input}
            required
            />
        </form>
        <button className={styles.button}>Sign up</button>
    </div>
  )
}
