import type { Metadata } from 'next'
import { constants } from '@/app/common/domain/models/headTitle'

export const metadata: Metadata = {
  title: constants.createTitle('404 NOT FOUND')
}

export default function NotFound() {
  return (
    <div id="main" className={'text-content-text'}>
      <h1>404 Not Found</h1>
    </div>
  )
}