"use client"

import { Koulen, Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import { header } from '@/app/models/header/header'

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
    <header className={'bg-[var(--menuColor)] flex place-content-around select-none'}>
          {/* logo */}
          <div className={'logo p-2'}>
            <Link href='/'>
              <h1 className={`${koulen.className} text-3xl leading-1`}>STUDIO CLIP</h1>
              <h2 className={`${koulen.className} text-xl tracking-[0.6rem] leading-none`}>Myanmar</h2>
            </Link>
          </div>
          {/* hamburger menu */}
          <button title='hamburgerToggle' className={'md:hidden'}>
            <Image src='/hamburger.svg' width={30} height={30} alt='hamburger' />
            </button>
          {/* navigation */}
          <nav className={`${inter.className} uppercase hidden md:flex items-center space-x-5`}>
            {header.nav.map(element => {
              return <Link href={element.url} key={element.id}>{element.title}</Link>
            })}
          </nav>
          {/* social icons */}
          <div className={'hidden md:flex md:space-x-2 items-center'}>
            {header.social.map(element => {
              return (
              <Link href={element.url} key={element.id} className={'relative w-[50px] h-[50px] hover:scale-105 group duration-300'}>
                {<div>
                  <Image
                    src={element.blackIcon}
                    width={element.width}
                    height={element.height}
                    alt={element.id}
                    className={'rounded-lg absolute group-hover:opacity-0 duration-300'}
                  />
                  <Image
                    src={element.colorIcon}
                    width={element.width}
                    height={element.height}
                    alt={element.id}
                    className={'rounded-lg opacity-0 absolute group-hover:opacity-100 duration-300'}
                  />
                </div>}
              </Link>)
            })}
          </div>
        </header>
  )
}