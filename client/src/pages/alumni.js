import React from 'react'
import { Navbar } from "../Components/Navbar/Navbar"
import { Footer } from '../Components/Footer/Footer'
import { SignUp } from '../Components/SignUp/SignUp'


const alumni = () => {
  return (
    <div>
        <Navbar />
        <div
          style={{
            textAlign: 'center',
            margin: '24px auto 12px',
            padding: '20px 16px',
            maxWidth: '920px',
            background: '#7f1d1d',
            borderRadius: '12px'
          }}
        >
          <p style={{ color: '#ffffff', fontWeight: 700, margin: '0 0 14px 0', fontSize: '1rem' }}>
            Stay connected with alumni, events, and career opportunities
          </p>
          <a
            href="https://www.linkedin.com/groups/18975042/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '14px 28px',
              fontWeight: 800,
              fontSize: '1.2rem',
              color: '#7f1d1d',
              textDecoration: 'none',
              letterSpacing: '0.2px',
              background: '#ffffff',
              borderRadius: '10px'
            }}
          >
            Click to Join our Professional Network
          </a>
        </div>
        <SignUp />
        <Footer />
    </div>
  )
}

export default alumni