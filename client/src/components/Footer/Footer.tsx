import { footer } from '@/models/footer/footer'
import Link from 'next/link'

export default function StudioFooter() {
  return (
    <footer>
          <div className={'w-screen bg-menu-bg p-4 m-auto text-xs'}>
            <p>
              {footer.description.title}
            </p>
            <p className={'capitalize'}>
              {footer.description.place}
            </p>
            <p>
              {footer.description.contact.map((element, index) => {
                if (element.url) {
                  return (
                    <>
                      <Link href={element.url} key={element.id} target={'_blank'}>{element.url}</Link>
                      {index !== footer.description.contact.length -1 && ' | '}
                    </>
                  )
                } else if (element.num) {
                  return (
                    <>
                      {element.num}
                      {index !== footer.description.contact.length -1 && ' | '}
                    </>
                  )
                }
              })}
            </p>
          </div>
        </footer>
  )
}