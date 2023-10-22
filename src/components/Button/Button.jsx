"use client";

import React from 'react'
import styles from './button.module.css'
function Button() {
  return (
    <div>
        <button className={styles.button} onClick={()=>console.log('log out')}>log out</button>
    </div>
  )
}

export default Button