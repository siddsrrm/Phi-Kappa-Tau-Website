import React from 'react'
import * as styles from './RushForm.module.css'

export const RushForm = () => {
  return (
    <div className={styles.form}>
        <iframe 
        src="https://docs.google.com/forms/d/e/1FAIpQLSfaLZ2IY64iBAmo3oLTe6WDtG-4A-t4Y2i1PFT126UaLrI8Eg/viewform?embedded=true" 
        width="100%" 
        title="Rush Google Form"
        height="800" 
        frameborder="0" 
        marginheight="0" 
        marginwidth="0">
        </iframe>
    </div>
  )
}
