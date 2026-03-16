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

        <p className="forthcoming-info">
          Herbosin Corps continues to explore opportunities to expand its presence in the agricultural sector with
          innovative and sustainable fertilizer solutions. With our strong foundation in natural products and botanical
          expertise, we aim to gradually extend our offerings to support modern farming practices. Our long-term vision
          is to contribute to global agriculture through high-quality organic and liquid fertilizer solutions.
        </p>

        <div className="forthcoming-products">
          <div className="forthcoming-product-row">
            <div className="forthcoming-product-text">
              <h3 className="forthcoming-product-title">Organic Fertilizers</h3>
              <p>
                Herbosin Corps is expanding its product portfolio with the introduction of organic fertilizers, developed
                to support sustainable and eco-friendly agriculture. Our organic fertilizers are formulated using natural
                plant-based and organic materials that enrich soil health, improve nutrient availability, and promote
                balanced plant growth.
              </p>
              <p>
                Designed for modern farming practices, these fertilizers help enhance soil fertility while maintaining
                environmental sustainability. By focusing on natural ingredients and responsible production methods,
                Herbosin Corp aims to provide farmers and agricultural industries with reliable solutions that contribute
                to healthier crops and long-term soil productivity.
              </p>
            </div>
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
          </div>

          <div className="forthcoming-product-row forthcoming-product-row-reverse">
            <div className="forthcoming-product-text">
              <h3 className="forthcoming-product-title">Liquid Fertilizers</h3>
              <p>
                As part of our commitment to innovation in agriculture, Herbosin Corp is introducing a range of liquid
                fertilizers designed to deliver essential nutrients to plants efficiently and effectively. Liquid
                fertilizers provide fast absorption and uniform distribution, allowing crops to receive nutrients quickly
                and improve growth performance.
              </p>
              <p>
                Our formulations are developed to support various agricultural applications, including field crops,
                horticulture, and controlled farming environments. With a focus on quality and efficiency, Herbosin
                Corp&apos;s liquid fertilizers aim to help farmers achieve improved crop yield, better nutrient
                utilization, and sustainable agricultural productivity.
              </p>
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
      </div>
    </section>
  )
}
