'use client'

import { useRouter } from 'next/navigation'
import { FC } from 'react'
import styles from './pagination.module.css'

interface PaginationProps {
  // My Custom Props Here
}

export const Pagination: FC<PaginationProps> = ({}) => {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        // disabled={!hasPrev}
        // onClick={() => router.push(`?page=${page - 1}`)}
      >
        Previous
      </button>
      <button
        // disabled={!hasNext}
        className={styles.button}
        // onClick={() => router.push(`?page=${page + 1}`)}
      >
        Next
      </button>
    </div>
  )
}
