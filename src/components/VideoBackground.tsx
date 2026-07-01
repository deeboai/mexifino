import { type ReactNode } from 'react'
import { useMediaQuery } from '../hooks/useMediaQuery'

type VideoBackgroundProps = {
  webmSrc: string
  mp4Src: string
  overlayClassName?: string
  fallbackClassName?: string
  children: ReactNode
  className?: string
  objectPosition?: string
}

export default function VideoBackground({
  webmSrc,
  mp4Src,
  overlayClassName = 'bg-black/60',
  fallbackClassName = 'bg-black',
  children,
  className = '',
  objectPosition = 'center',
}: VideoBackgroundProps) {
  // Skip the video download/decode cost on small screens; a static
  // brand-colored backdrop keeps mobile fast without losing the layout.
  const canPlayVideo = useMediaQuery('(min-width: 768px)')

  return (
    <div className={`relative isolate overflow-hidden ${className}`}>
      {canPlayVideo ? (
        <video
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          style={{ objectPosition }}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={webmSrc} type="video/webm" />
          <source src={mp4Src} type="video/mp4" />
        </video>
      ) : (
        <div className={`absolute inset-0 -z-20 ${fallbackClassName}`} />
      )}
      <div className={`absolute inset-0 -z-10 ${overlayClassName}`} />
      {children}
    </div>
  )
}
