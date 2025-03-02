import React, {useState} from 'react'
import * as styles from './SignUp.module.css';


export const SignUp = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form Data:", formData)

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
    });
  }


  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Participate in Our Network</h1>
        <h3 className={styles.header}>Sign up with your email to receive semester newsletters and stay updated on alumni events</h3>

        <form className={styles.form} onSubmit={handleSubmit}>
            <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className={styles.input}
            value={formData.firstName}
            onChange={handleChange}
            required
            />
            <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className={styles.input}
            value={formData.lastName}
            onChange={handleChange}
            required
            />
            <input
            type="text"
            name="email"
            placeholder="Email"
            className={styles.input}
            value={formData.email}
            onChange={handleChange}
            required
            />
            <div className={styles.buttonContainer}>
              <button className={styles.button} type='submit'>Sign up</button>
            </div>
            
        </form>
        
    </div>
  )
}
