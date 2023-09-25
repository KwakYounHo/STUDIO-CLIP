"use client"

import * as React from 'react';
import { useRouter, usePathname } from 'next/navigation'
import { aboutPageNum } from '@/models/about/aboutPage'
import SelectLanguage from '@/utils/SelectLanguage'
import Image from 'next/image'

const Language: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname()

  return (
    <main className={'flex flex-col gap-10 items-center justify-center text-content-text'}>
      <SelectLanguage className={'mt-7 w-10/12'} />
      {aboutPageNum.range.map(element => {
        return (
          <Image
            src={`/info/${pathname.split('/')[3]}/infoPage${element}.png`}
            width={2160}
            height={1495}
            alt={`${element}page IMG`}
            key={element}
            className={'w-screen'}
            priority
          />
        )
      })}
    </main>
  )
}
export default Language;