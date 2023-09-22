import { footer } from '@/models/footer/footer'
import Link from 'next/link'
import * as React from 'react';

export default function StudioFooter() {
  return (
    <footer>
          <div>
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
                    <React.Fragment key={element.id}>
                      {index === footer.description.contact.length -1? <Link href={element.url} target={'_blank'}>{element.url}</Link>:<Link href={element.url} target={'_blank'}>{element.url + " | "}</Link>}
                    </React.Fragment>
                  )
                } else if (element.num) {
                  return (
                    <React.Fragment key={element.id}>
                      {index === footer.description.contact.length -1? `${element.num}`:`${element.num} | `}
                    </React.Fragment>
                  )
                }
              })}
            </p>
          </div>
        </footer>
  )
}