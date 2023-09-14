import type { FC } from 'react';
import Image from 'next/image'

const Page01: FC = () => {
  return (
      <div id="Page01">
        <Image
          src={'/BG/blackLight.jpg'}
          alt={'black light'}
          className={'w-screen h-screen relative z-50'}
          width={'3575'}
          height={'2475'}
        />
        <h1>hi there</h1>
      </div>
  )
}

export default Page01;