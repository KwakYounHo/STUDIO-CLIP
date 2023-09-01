import { NextFont } from 'next/dist/compiled/@next/font'
import { Inter } from 'next/font/google'

const inter: NextFont = Inter({
  subsets: ['latin'],
  weight: ['400']
})

export default function StudioFooter() {
  return (
    <footer>
          <div className={`${inter.className} COinfo`}>
            <p>
              STUDIO CLIP Corp.
            </p>
            <p>
              Royal Mg Bamar Residence, Dhamar Yone Street, Hlaing, Yangon, Myanmar
            </p>
            <p>
              <a href="http://studioclip.video" title="STUDIO CLIP">http://studioclip.video</a> | +09 88413 9136
            </p>
          </div>
        </footer>
  )
}