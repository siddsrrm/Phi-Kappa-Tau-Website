import React from 'react'
import { Navbar } from "../Components/Navbar/Navbar"
import { RushForm } from '../Components/RushForm/RushForm'
import { Footer } from '../Components/Footer/Footer'

const rush = () => {
  return (
    <div>
        <Navbar />
        <div
          style={{
            margin: '24px auto 8px',
            padding: '20px 18px',
            maxWidth: '920px',
            border: '1px solid #e5e7eb',
            borderRadius: '12px',
            background: '#ffffff',
            boxShadow: '0 8px 18px rgba(15, 23, 42, 0.08)'
          }}
        >
          <h3 style={{ margin: '0 0 10px 0', color: '#7f1d1d' }}>Rush Contact</h3>
          <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700, color: '#111827' }}>
            Jason Klutho - Computer Engineering '27
          </p>
          <a href="tel:3148358255" style={{ display: 'inline-block', marginTop: '4px', color: '#1f2937', fontWeight: 600, textDecoration: 'none' }}>
            (314) 835-8255
          </a>
        </div>
        <RushForm />
        <Footer />
    </div>
  )
}

export default rush