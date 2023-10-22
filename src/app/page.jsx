import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import hero from "/public/images/hero.svg"
import { Montserrat } from 'next/font/google'
const mont=Montserrat({subsets:['latin'],
weight:['900']})
export default function Home() {
  return (
 <div className={styles.container}>
  <div className={styles.col}>
   <h1 className={`${styles.title} ${mont.className}`}>your best online e-commerce destionions </h1>
   <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aspernatur vero iste ullam modi expedita maxime, et esse! Alias accusamus perspiciatis repudiandae voluptate quae</p>
   <button className={styles.button}>shop now</button>
  </div>
  <div className={styles.col}>
    <Image src={hero} alt='home img' className={styles.img}/>
    </div>

 </div>
  )
}
