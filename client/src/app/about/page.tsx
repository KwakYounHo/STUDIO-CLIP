import type { Metadata } from 'next'
import { constants } from '@/app/common/domain/models/headTitle'
import Image from 'next/image'
import { aboutPageNum } from '@/app/about/models/aboutPage'

export const metadata: Metadata = {
  title: constants.createTitle('About')
}

export default function About() {
  return (
    <main className={'flex flex-col gap-10 items-center justify-center text-content-text'}>
      {aboutPageNum.range.map(element => {
        return (
          <Image
            src={`/info/infoPage${element}.png`}
            width={2160}
            height={1495}
            alt={`${element}page IMG`}
            key={element}
            className={'w-screen'}
          />
        )
      })}
    </main>
  )
}