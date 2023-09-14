import type { Metadata } from 'next'
import { constants } from '@/app/common/domain/models/headTitle'
import Page01 from '@/app/about/components/Page01'

export const metadata: Metadata = {
  title: constants.createTitle('About')
}

export default function About() {
  return (
    <main className={'flex items-center justify-center text-content-text'}>
      <Page01 />
    </main>
  )
}