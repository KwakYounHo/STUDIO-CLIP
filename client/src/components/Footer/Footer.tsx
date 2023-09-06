import { footer } from '@/models/footer/footer'

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
                if (element === 'https://studioclip.video') {
                  return <><a href='https://studioclip.video' title={'STUDIO CLIP'}>{element}</a>{index !== footer.description.contact.length -1 && ' | '}</>
                } else {
                  return <>{element}{index !== footer.description.contact.length -1 && ' | '}</>
                }
              })}
            </p>
          </div>
        </footer>
  )
}