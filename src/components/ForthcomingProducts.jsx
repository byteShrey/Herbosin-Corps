import { useRef, useEffect } from 'react'
import './ForthcomingProducts.css'

export default function ForthcomingProducts() {
  const video1Ref = useRef(null)
  const video2Ref = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const play = (el) => {
      if (!el) return
      el.muted = true
      el.play().catch(() => {})
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            play(video1Ref.current)
            play(video2Ref.current)
          }
        })
      },
      { threshold: 0.25, rootMargin: '0px' }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="forthcoming" ref={sectionRef}>
      <div className="forthcoming-inner">
        <h2 className="forthcoming-title">Forthcoming Products</h2>
        <div className="forthcoming-videos">
          <div className="forthcoming-video-wrap">
            <video
              ref={video1Ref}
              src="/Assets/Home/Solid_Fertilizer_Branding_Video_Ready.mp4"
              loop
              muted
              playsInline
              className="forthcoming-video"
            />
          </div>
          <div className="forthcoming-video-wrap">
            <video
              ref={video2Ref}
              src="/Assets/Home/Branding_Change_Request.mp4"
              loop
              muted
              playsInline
              className="forthcoming-video"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
