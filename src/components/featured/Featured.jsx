import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Kreulich here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem Ipsum dolor sit amet et.</h1>
          <p className={styles.postDescription}>
            Lorem Ipsum dolor sit amet et alety sjdabuwsdadsa
            Lorem Ipsum dolor sit amet etdsamdsadsw  wdasda
            Lorem Ipsum dolor sit amet et dsadsmadklwamoid
            Lorem Ipsum dolor sit amet et.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured
