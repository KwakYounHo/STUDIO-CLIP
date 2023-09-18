import * as React from 'react';
import Image from 'next/image'
import { workPageNum } from '@/models/work/workPage'

const Work: React.FC = () => {
  return (
    <main className={'flex flex-col gap-10 items-center justify-center text-content-text'}>
      {workPageNum.range.map(element => {
        return (
          <Image
            src={`/info/infoPage${element}.png`}
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
export default Work;