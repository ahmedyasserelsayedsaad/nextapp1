import Image from 'next/image'
import styles from './page.module.css'
import { Lobster } from 'next/font/google'
import Link from 'next/link'
const lob = Lobster({ subsets: ['latin'], weight: ['400'] })
function About() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1 className={`${styles.title} ${lob.className}`}>about hexastore</h1>
      </div>
      <div className={styles.aboutcon}>
        <div className={styles.col}>
          <h1 className={styles.text}>hello in your best online store</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus modi enim nihil numquam ad deleniti nostrum quidem assumenda temporibus ipsum? Aliquid quia cum officiis vitae? Minima dignissimos id ipsum. Maxime magnam non sapiente tempore tempora totam odit fuga, enim doloribus quos nobis assumenda saepe, molestias laudantium sint ducimus explicabo est.</p>
       <Link href='/blog' className={styles.btn}>our blogs</Link>
       
        </div>
        <div className={styles.col}>
          <Image
          src={'/images/about1.svg'} 
          alt='about_imge' 
          width={400}
          height={400}/>
          
        </div>
      
      </div>
    </div>
  )
}

export default About