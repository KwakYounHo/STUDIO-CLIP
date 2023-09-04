import Image from 'next/image'
import { Koulen, Inter } from 'next/font/google'
import Link from 'next/link'

import styles from '@/app/home.module.css'
import { main } from '@/models/main/main'

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
    <main className={'w-full h-full flex flex-col items-center justify-center space-y-[4rem] text-white'}>
      {/* title */}
      <div className={`${koulen.className} text-center select-none`}>
        <h1 className={'leading-none text-6xl md:text-8xl'}>studio clip</h1>
        <h2 className={'leading-none text-4xl tracking-[1.35rem] ml-5 md:text-6xl md:tracking-[2rem] md:ml-7'}>Myanmar</h2>
      </div>
      {/* social menu */}
      <div className={'uppercase flex flex-col items-center md:flex-row text-3xl space-y-5 md:space-x-8 md:space-y-0 md:text-4xl font-bold'}>
        {main.socialMenu.map(element => {
          return <Link href={element.url} key={element.title} className={'hover:scale-110 duration-300'}>{element.title}</Link>
        })}
      </div>
    </main>
  )
}
