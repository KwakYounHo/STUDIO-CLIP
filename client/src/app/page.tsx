import Image from 'next/image'
import { Koulen, Inter } from 'next/font/google'
import Link from 'next/link'

import styles from '@/app/home.module.css'

const koulen = Koulen({
  subsets: ['latin'],
  weight: ['400']
})
const inter = Inter({
  subsets: ['latin'],
  weight: ['700']
})

export default function Home() {
  return (
    <div id="main" className={styles.main}>
      <div className={`${koulen.className} ${styles.title}`}>
        <h1 className={styles.mainTitle}>studio clip</h1>
        <h2 className={styles.subTitle}>Myanmar</h2>
      </div>
      <div className={`${inter.className} ${styles.socialMenu} uppercase`}>
        <Link href='#'>instar</Link>
        <Link href='https://www.facebook.com/profile.php?id=61550583410087' target='blank'>facebook</Link>
        <Link href='#'>youtube</Link>
        <Link href='#'>tiktok</Link>
      </div>
    </div>
  )
}
