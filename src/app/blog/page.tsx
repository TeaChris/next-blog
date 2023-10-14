import { Menu } from '@/components/Menu/Menu'
import { CardList } from '@/components/cardList/CardList'
import { FC } from 'react'
import styles from './blogPage.module.css'

interface BlogProps {
  // My Custom Props Here
}

export default function BlogPage({}) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Blog</h1>
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  )
}
