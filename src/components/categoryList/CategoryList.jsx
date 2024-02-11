import React from 'react'
import styles from './categorylist.module.css'
import Link from 'next/link'
import Image from 'next/image'

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link href="/blog?cat=programming" className={`${styles.category} ${styles.programming}`}>
          <Image src="/style.png" alt="programming" width={32} height={32} className={styles.image}/>
          Programming
        </Link>
        <Link href="/blog?cat=frontEnd" className={`${styles.category} ${styles.frontEnd}`}>
          <Image src="/fashion.png" alt="Front-End" width={32} height={32} className={styles.image}/>
          Front-End
        </Link>
        <Link href="/blog?cat=backEnd" className={`${styles.category} ${styles.backEnd}`}>
          <Image src="/food.png" alt="Back-End" width={32} height={32} className={styles.image}/>
          Back-End
        </Link>
        <Link href="/blog?cat=ia" className={`${styles.category} ${styles.ia}`}>
          <Image src="/travel.png" alt="IA" width={32} height={32} className={styles.image}/>
          IA
        </Link>
        <Link href="/blog?cat=bancoDados" className={`${styles.category} ${styles.bancoDados}`}>
          <Image src="/culture.png" alt="Banco de Dados" width={32} height={32} className={styles.image}/>
          Banco de Dados
        </Link>
        <Link href="/blog?cat=mobile" className={`${styles.category} ${styles.mobile}`}>
          <Image src="/coding.png" alt="Mobile" width={32} height={32} className={styles.image}/>
          Mobile
        </Link>
      </div>
    </div>
  )
}

export default CategoryList
