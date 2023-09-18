import * as React from 'react';
import type { Metadata } from 'next'
import { constants } from '@/app/common/domain/models/headTitle'
import Image from 'next/image'
import { aboutPageNum } from '@/models/about/aboutPage'

export const metadata: Metadata = {
  title: constants.createTitle('About')
}

const About: React.FC = () => {
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
export default About;