'use client'

import { FC, useState } from 'react'
import styles from './authLinks.module.css'
import Link from 'next/link'

interface AuthLinksProps {
  // My Custom Props Here
}

export const AuthLinks: FC<AuthLinksProps> = ({}) => {
  const [open, setOpen] = useState<boolean>(false)

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
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
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
        </div>
      )}
    </>
  )
}
