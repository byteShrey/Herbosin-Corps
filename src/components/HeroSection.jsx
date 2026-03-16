import './HeroSection.css'

export default function HeroSection() {
  return (
    <>
      <section className="hero">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="/Assets/Home/Gemini_Generated_Image_sbswytsbswytsbsw.png"
          ref={(el) => el && (el.muted = true)}
        >
          <source src="/Assets/Home/Website_Background_Video_Request.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="hero-title">
            From Earth to Extract: Quality You Can See, Smell, and Taste
          </h1>
        </div>
      </section>
      <section className="hero-below">
        <div className="container">
          <p className="hero-placeholder">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>
    </>
  )
}
