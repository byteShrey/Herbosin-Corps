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
          At Herbosin Corps, we specialize in the sourcing, processing, and supply of high-quality herbal raw materials and essential oils. With a deep commitment to purity, sustainability, and innovation, we provide natural ingredients that support industries such as nutraceuticals, cosmetics, pharmaceuticals, aromatherapy, and wellness products. 
Our mission is to bridge the gap between nature and modern industry by delivering premium botanical ingredients sourced from trusted growers and processed under strict quality standards. Every product we offer reflects our dedication to authenticity, consistency, and global quality benchmarks. 

With a focus on long-term partnerships, Herbosin Corp works closely with businesses around the world to supply reliable, natural solutions that help brands create safe, effective, and sustainable products. 
          </p>
        </div>
      </section>
    </>
  )
}
