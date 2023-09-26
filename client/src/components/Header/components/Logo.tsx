"use client"

import * as React from 'react'
import Link from 'next/link'
import { Koulen } from 'next/font/google'

const koulen = Koulen({
  subsets: ["latin"],
  weight: ["400"],
});

const closeHamburger = () => {
  const hamburgerEvent = new Event('closeHamburger')
  dispatchEvent(hamburgerEvent)
}

const Logo: React.FC = () => {
  return (
    <Link href='/' onClick={closeHamburger} className={koulen.className}>
      <h1 className={'text-3xl leading-1'}>STUDIO CLIP</h1>
      <h2 className={'text-xl tracking-[0.6rem] leading-none'}>Myanmar</h2>
    </Link>
  )
}

export default Logo;