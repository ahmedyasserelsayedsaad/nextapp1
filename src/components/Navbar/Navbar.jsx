import Button from '../Button/Button'
import React from 'react'
import styles from './navbar.module.css'
import { Links } from './data'
import ChangeMode from '../ChangeMode/ChangeMode'
import Link from 'next/link'
import { Inter,Lobster } from 'next/font/google'
const inter=Inter({subsets:['latin']})
const lobster=Lobster({subsets:['latin'],
weight:'400'});
function navbar() {
  return (
  <div className={styles.container}>
       <Link href='/' className={`${styles.logo} ${lobster.className} `}>hexastore</Link>
    
    <div className={styles.links}>
      <ChangeMode/>
        {
            Links.map(link=>
            <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>
            )
        }
       <Button/>
    </div>
  
  </div>
  )
}

export default navbar