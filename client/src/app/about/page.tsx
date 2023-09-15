import type { Metadata } from 'next'
import { constants } from '@/app/common/domain/models/headTitle'
import Image from 'next/image'

export const metadata: Metadata = {
  title: constants.createTitle('About')
}

export default function About() {
  const fileCount: number[] = [];
  for (let i=1; i<10; i++) {
    fileCount.push(i);
  }
  return (
    <main className={'flex flex-col gap-10 items-center justify-center text-content-text'}>
      {fileCount.map(element => {
        return (
          <Image
            src={`/info/slide${element}.png`}
            width={720}
            height={498}
            alt={`${element}page IMG`}
            key={`slide${element}`}
            className={'w-screen'}
          />
        )
      })}
    </main>
  )
}