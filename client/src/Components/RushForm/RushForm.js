import React, { useState } from 'react'
import { FaSpinner } from 'react-icons/fa'
import * as styles from './RushForm.module.css'

export const RushForm = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      <div className={styles.form}>
        {loading && (
          <div className={styles.iconSpinner}>
            <FaSpinner className={styles.spinner} />
          </div>
        )}
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLSfaLZ2IY64iBAmo3oLTe6WDtG-4A-t4Y2i1PFT126UaLrI8Eg/viewform?embedded=true" 
          width="100%" 
          title="Rush Google Form"
          height="800" 
          loading="lazy"
          frameborder="0" 
          marginheight="0" 
          marginwidth="0"
          onLoad={() => setLoading(false)}
        ></iframe>
      </div>
    </div>
  )
}
