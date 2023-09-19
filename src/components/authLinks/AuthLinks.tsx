import { FC } from 'react'
import styles from './authLinks.module.css'
import Link from 'next/link'

interface AuthLinksProps {
  // My Custom Props Here
}

export const AuthLinks: FC<AuthLinksProps> = ({}) => {
  const status = 'notAuthenticated'
  return (
    <>
      {status === 'notAuthenticated' ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
    </>
  )
}
