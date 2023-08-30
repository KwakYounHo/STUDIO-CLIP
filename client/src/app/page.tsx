import Image from 'next/image'
import { Koulen, Inter } from 'next/font/google'
import Link from 'next/link'

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
    <div id="main">
      <div className={`${koulen.className} title`}>
        <h1 className={'mainTitle'}>studio clip</h1>
        <h2 className={'subTitle'}>Myanmar</h2>
      </div>
      <div className={`${inter.className} socialMenu`}>
        <Link href='#'>instar</Link>
        <Link href='#'>facebook</Link>
        <Link href='#'>youtube</Link>
        <Link href='#'>tiktok</Link>
      </div>
    </div>
  )
}
