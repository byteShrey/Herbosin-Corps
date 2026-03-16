import './ForthcomingProducts.css'

export default function ForthcomingProducts() {
  return (
    <section className="forthcoming">
      <div className="forthcoming-inner">
        <h2 className="forthcoming-title">Forthcoming Products</h2>
        <div className="forthcoming-videos">
          <div className="forthcoming-video-wrap">
            <video
              src="/Assets/Home/Solid_Fertilizer_Branding_Video_Ready.mp4"
              loop
              muted
              playsInline
              autoPlay
              className="forthcoming-video"
              ref={(el) => el && (el.muted = true)}
            />
          </div>
          <div className="forthcoming-video-wrap">
            <video
              src="/Assets/Home/Branding_Change_Request.mp4"
              loop
              muted
              playsInline
              autoPlay
              className="forthcoming-video"
              ref={(el) => el && (el.muted = true)}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
