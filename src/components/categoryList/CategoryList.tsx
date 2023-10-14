import { FC } from 'react'
import styles from './categoryList.module.css'
import Link from 'next/link'
import Image from 'next/image'

interface CategoryListProps {
  // My Custom Props Here
}

export const CategoryList: FC<CategoryListProps> = ({}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            src="/style.png"
            alt="style image"
            width={32}
            height={32}
            className={styles.image}
          />
          Style
        </Link>
        <Link
          href="/blog?cat=travel"
          className={`${styles.category} ${styles.travel}`}
        >
          <Image
            src="/travel.png"
            alt="style image"
            width={32}
            height={32}
            className={styles.image}
          />
          Travel
        </Link>
        <Link
          href="/blog?cat=culture"
          className={`${styles.category} ${styles.culture}`}
        >
          <Image
            src="/culture.png"
            alt="style image"
            width={32}
            height={32}
            className={styles.image}
          />
          Culture
        </Link>
        <Link
          href="/blog?cat=coding"
          className={`${styles.category} ${styles.coding}`}
        >
          <Image
            src="/coding.png"
            alt="style image"
            width={32}
            height={32}
            className={styles.image}
          />
          Coding
        </Link>
        <Link
          href="/blog?cat=food"
          className={`${styles.category} ${styles.food}`}
        >
          <Image
            src="/food.png"
            alt="style image"
            width={32}
            height={32}
            className={styles.image}
          />
          Food
        </Link>
      </div>
    </div>
  )
}
