import { Featured } from '@/components/featured/featured'
import styles from './homepage.module.css'
import { CategoryList } from '@/components/categoryList/CategoryList'
import { CardList } from '@/components/cardList/CardList'
import { Menu } from '@/components/Menu/Menu'

export default function Home() {
  return (
    <main className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        {/* <CardList page={page} /> */}
        <Menu />
      </div>
    </main>
  )
}
