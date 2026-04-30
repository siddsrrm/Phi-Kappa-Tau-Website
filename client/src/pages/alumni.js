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
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
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
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              style={{ display: 'block' }}
            >
              <rect x="1" y="1" width="22" height="22" rx="3" fill="#0A66C2" />
              <rect x="5.2" y="10" width="2.7" height="8.3" fill="#ffffff" />
              <circle cx="6.55" cy="6.9" r="1.35" fill="#ffffff" />
              <path
                fill="#ffffff"
                d="M11 10h2.6v1.2c.7-1 1.8-1.5 3.3-1.5 2.6 0 4.1 1.5 4.1 4.6v4h-2.8v-3.6c0-1.6-.6-2.4-2-2.4-1.4 0-2.3.9-2.3 2.4v3.6H11V10z"
              />
            </svg>
            <span>Click to Join our Professional Network</span>
          </a>
        </div>
        <div
          style={{
            margin: '18px auto 8px',
            padding: '20px 18px',
            maxWidth: '920px',
            border: '1px solid #e5e7eb',
            borderRadius: '12px',
            background: '#ffffff',
            boxShadow: '0 8px 18px rgba(15, 23, 42, 0.08)'
          }}
        >
          <h3 style={{ margin: '0 0 8px 0', color: '#7f1d1d' }}>Alumni Relations Contact</h3>
          <p style={{ margin: 0, fontSize: '1.15rem', fontWeight: 700, color: '#111827' }}>Matthew Rodgers</p>
          <p style={{ margin: '6px 0 0 0', color: '#475569', fontWeight: 500 }}>Electrical Engineering '28</p>
        </div>
        <SignUp />
        <Footer />
    </div>
  )
}

export default alumni