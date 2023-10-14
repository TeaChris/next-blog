import { FC } from 'react'
import { Pagination } from '../pagination/Pagination'
import styles from './cardList.module.css'
import Image from 'next/image'
import { Card } from '../card/Card'

interface CardListProps {
  // My Custom Props Here
}

export const CardList: FC<CardListProps> = ({}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        <div className={styles.post}>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Pagination />
    </div>
  )
}
