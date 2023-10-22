import Image from 'next/image'
import styles from './Footer.module.css'
import { Lobster } from 'next/font/google'
import { data } from './data'
const lobster = Lobster({
  subsets: ['latin'],
  weight: ['400']
})
function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.copy}>
        <h4>© 2023,<span className={`${styles.logo} ${lobster.className}`}>hexastore</span> all rights reserves</h4>
      </div>
      <div className={styles.social}>
        {
          data.map((img)=>
          <Image 
          key={img.id}
          src={img.url}
          width={20}
          height={20}
          alt='face'
          className={styles.icon}/>
          )
        }
       
      </div>
    </div>
  )
}

export default Footer