"use client"

import { header } from "@/models/header/header";
import { FC, useEffect, useState, useCallback } from 'react'
import Image from "next/image";
import Link from "next/link";

type Props = {}
const HamburgerMenu: FC<Props> = () => {

  const [ toggle, setToggle ] = useState<boolean>(false);
  const toggleHamburger = useCallback(()=>{
    setToggle(!toggle)
  }, [toggle])

  useEffect(()=>{
    const closeHamburger = () => {
      setToggle(false)
    }
    addEventListener('closeHamburger', closeHamburger)

    return () => {
      removeEventListener('closeHamburger', closeHamburger)
    }
  }, [])
  

  return (
    <>
      <button title='hamburgerToggle' className={'md:hidden'} onClick={toggleHamburger}>
        <Image src={toggle? '/hamburger_close.svg' : '/hamburger.svg'} width={30} height={30} alt='hamburger' />
      </button>
      {toggle &&
      <div className={'absolute right-0 top-[72px] w-full bg-menu-bg opacity-100 text-sm tracking-tight rounded-b-lg border-t-2 border-t-black'}>
        <ul className={'uppercase'}>
          {header.nav.map((element, index) => {
            return <li className={(index === header.nav.length-1) ? 'border-b-4 border-double border-b-menu-bg p-3':'border-b-2 p-3'}><Link href={element.url} key={element.id} onClick={toggleHamburger}>{element.title}</Link></li>
          })}
        </ul>
        <ul className={'uppercase'}>
          {header.social.map((element, index) => {
            return <li className={(index === header.social.length-1)? 'p-3':'border-b-2 p-3'}><Link href={element.url} target='_blank'>{element.id}</Link></li>
          })}
        </ul>
      </div>}
    </>
  )
}

export default HamburgerMenu;