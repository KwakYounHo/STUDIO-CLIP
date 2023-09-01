"use client"

import { Koulen, Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@comp/Header/Header.module.css'

const koulen = Koulen({
  subsets: ['latin'],
  weight: ['400']
})
const inter = Inter({
  subsets: ['latin'],
  weight: ['400']
})

export default function StudioHeader() {
  return (
    <header className={`${styles.header}`}>
          <div className='logo'>
            <Link href='/'>
              <h1 className={`${koulen.className} ${styles.mainTitle}`}>STUDIO CLIP</h1>
              <h2 className={`${koulen.className} ${styles.subTitle}`}>Myanmar</h2>
            </Link>
          </div>
          <button title='hamburgerToggle' className={styles.hamburger}>
            <Image src='/hamburger.svg' width={30} height={30} alt='hamburger' />
            </button>
          <div className={`${inter.className} ${styles.nav} uppercase`}>
            <Link href='/about'>about us</Link>
            <Link href='#'>사업분야</Link>
            <Link href='#'>portfolio</Link>
            <Link href='#'>contact us</Link>
          </div>
          <div className={`${styles.social}`}>
            <Link href='#'>
              <div className={`${styles.baseImage}`}>
                <Image src='/instar_50px.png' width={50} height={50} alt='instargram' />
              </div>
              <div className={`${styles.hoverImage}`}>
                <Image src='/instar_color.png' width={50} height={50} alt='instargram' />
              </div>
            </Link>
            <Link href='https://www.facebook.com/profile.php?id=61550583410087' target='blank'>
              <div className={`${styles.baseImage}`}>
                <Image src='/facebook_50px.png' width={50} height={50} alt='facebook' />
              </div>
              <div className={`${styles.hoverImage}`}>
                <Image src='/facebook_color.png' width={50} height={50} alt='facebook' />
              </div>
            </Link>
            <Link href='#'>
              <div className={`${styles.baseImage}`}>
                <Image src='/youtube_50px.png' width={50} height={50} alt='youtube' />
              </div>
              <div className={`${styles.hoverImage}`}>
                <Image src='/youtube_color.png' width={50} height={50} alt='youtube' />
              </div>
            </Link>
            <Link href='#'>
              <div className={`${styles.baseImage}`}>
                <Image src='/tiktok_50px.png' width={50} height={50} alt='tiktok' />
              </div>
              <div className={`${styles.hoverImage}`}>
                <Image src='/tiktok_color.png' width={50} height={50} alt='tiktok' />
              </div>
            </Link>
          </div>
        </header>
  )
}