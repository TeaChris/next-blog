import Image from 'next/image'
import { FC } from 'react'
import styles from './card.module.css'
import Link from 'next/link'

interface CardProps {
  // My Custom Props Here
}

export const Card: FC<CardProps> = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="image" fill />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.details}>
          <span className={styles.date}>11.02.2023</span>
          <span className={styles.category}> CULTURE</span>
        </div>
        <Link href="/">
          <h1 className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
        </Link>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
          odio, explicabo libero, fugit eos reiciendis amet minima dolorem error
          odit, labore dignissimos facere dolore eveniet dolores. Repudiandae, a
          totam! Molestiae architecto recusandae animi a nostrum, quis numquam
          repellat non, laboriosam blanditiis maxime odit!
        </p>
        <Link href="/">Read More</Link>
      </div>
    </div>
  )
}
