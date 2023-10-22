import Link from 'next/link'
import styles from './products.module.css'
import Image from 'next/image'
import { Lobster } from 'next/font/google'
const lob = Lobster({
  subsets: ['latin'],
  weight: ['400']
})



async function getProducts() {
  const res = await fetch("https://dummyjson.com/products")
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}


async function Post() {

  const data = await getProducts();
  const products= data.products;
  return (
    <div className={styles.maincontainer}>

      {
        products.map(product => (
          <Link href={`/blog/${product.id}`} className={styles.post} key={product.id}>
            <div className={styles.imgecontainer}>
              <Image
                src={product.thumbnail}
                alt={product.title}
                className={styles.imge}
             fill={true}
              />
            </div>
            <div className={styles.contan}>
              <h1 className={`${styles.title} ${lob.className}`}>{product.title}</h1>
              <p className={styles.text}>{product.description}</p>
              <p className={styles.price}>{product.price}$</p>
            </div>
          </Link>
        ))
      }


    </div>
  )
}

export default Post