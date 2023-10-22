import Image from 'next/image'
import styles from './page.module.css'
import { Lobster } from 'next/font/google'
import Link from 'next/link'
import { data } from './data'
const lobb = Lobster({ subsets: ['latin'], weight: ['400'] })
function Portofolio() {
  return (
    <div className={styles.container}>
    <div className={styles.heading}>
     <h1 className={`${styles.title} ${lobb.className}`}>about author </h1>
    </div>
    <div className={styles.aboutcon}>
      <div className={styles.col}>
        <h1 className={styles.text}>hello, i am ahmed yasser saad</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus modi enim nihil numquam ad deleniti nostrum quidem assumenda temporibus ipsum? Aliquid quia cum officiis vitae? Minima dignissimos id ipsum. Maxime magnam non sapiente tempore tempora totam odit fuga, enim doloribus quos nobis assumenda saepe, molestias laudantium sint ducimus explicabo est.</p>
     <Link href='/blog' className={styles.btn}>our blogs</Link>
     
      </div>
      <div className={styles.col}>
        <Image
        src={'/images/pro1.jpg'} 
        alt='about_imge' 
        width={450}
        height={400}
        className={styles.img}/>
         <div className={styles.info}>
          <h3>contact with author </h3>
          <h5>follow these links</h5>
          {
            data.map((item)=>
            <Link href={item.url} className={styles.bten} key={item.id}>
              <Image 
              alt='social'
              src={item.title}
              width={20}
              height={20}
              />
            </Link>
            )
          }
       
         
         </div>
      </div>
    </div>
  </div>
  )
}

export default Portofolio