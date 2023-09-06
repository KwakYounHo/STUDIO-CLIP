import { Koulen, Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import { header } from '@/models/header/header'
import HamburgerMenu from '@/components/Header/utils/Hamburger/hamburger'
import Logo from '@comp/Header/Adapter/Logo'

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
    <header className={'w-full bg-menu-bg flex place-content-around select-none'}>
          {/* logo */}
          <div className={`${koulen.className} p-2`}>
            <Logo />
          </div>
          {/* hamburger menu */}
          <HamburgerMenu />
          {/* navigation */}
          <nav className={'uppercase hidden md:flex items-center space-x-5 md:text-sm lg:text-base'}>
            {header.nav.map(element => {
              return <Link href={element.url} key={element.id}>{element.title}</Link>
            })}
          </nav>
          {/* social icons */}
          <div className={'hidden md:flex md:space-x-1 lg:flex lg:space-x-5 items-center'}>
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