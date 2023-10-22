//import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

async function getProducts(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
import { Lobster } from 'next/font/google'
//import { images } from '../../../../next.config'
const lob = Lobster({ subsets: ['latin'], weight: ["400"] })
async function Title({ params }) {

  const product = await getProducts(params.id);


  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.info}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.desc}>{product.description}</p>
          <p className={styles.price}>{product.price}$</p>
          <p className={styles.desc}>{product.brand}</p>
          <h2 className={`${styles.cat} ${lob.className}`}>{product.category}</h2>
          <p className={styles.desc}>{product.rating}*</p>
        </div>
        <div className={styles.imgecontainer}>
          <Image
            className={styles.img}
            alt='id_photo'
            src={product.thumbnail}
            fill={true}
          />
          <span className={styles.author}>ahmed yasser</span>
        </div>
      </header>
      <div className={styles.contan}>
        <div className={styles.gallary}>
          {
            product.images.map(image=>(
              <Image
              key={product.id}
              src={image}
              alt={product.title}
              width={100}
              height={100}
              />
            ))
          }
        </div>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis accusantium illum praesentium tempora? Commodi recusandae, laudantium incidunt aspernatur rem minima et at vel magnam obcaecati, quae voluptates dolorum fuga? Eos amet similique deleniti nihil quod unde odio quibusdam animi in provident, exercitationem natus tempore fugiat molestiae incidunt veritatis cumque et. Beatae ea culpa nesciunt voluptatum. Quam, eligendi ad culpa saepe mollitia numquam non alias possimus necessitatibus quos iste fugiat, placeat rerum reiciendis corrupti suscipit vero porro ut laborum quibusdam illo. Molestias quaerat soluta, dolorum reprehenderit natus illo architecto laborum eligendi maxime error dolores est iste, voluptatum blanditiis tempora voluptate?.</p>
      </div>
    </div>
  )
}

export default Title