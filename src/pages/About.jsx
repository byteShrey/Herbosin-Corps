import { useEffect, useState } from 'react'
import '../components/AboutPage.css'

export default function About() {
  const [showTopButton, setShowTopButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 200)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const certificates = [
    { src: '/Assets/About us/AdharCert.jpeg', alt: 'Udyog Aadhaar MSME registration' },
    { src: '/Assets/About us/Fssai.jpeg', alt: 'FSSAI — Food Safety and Standards Authority of India' },
    { src: '/Assets/About us/GMP.jpeg', alt: 'WHO Good Manufacturing Practice (GMP) certificate' },
    { src: '/Assets/About us/Iso.jpeg', alt: 'ISO 9001:2015 Quality Management Systems certificate' },
    { src: '/Assets/About us/SpicesBoard.jpeg', alt: 'Spices Board India' },
    { src: '/Assets/About us/USFDA.png', alt: 'US FDA registered facility' },
  ]

  return (
    <>
      {/* Hero image */}
      <section id="about-top" className="about-hero">
        <img
          src="/Assets/About us/New desk.jpeg"
          alt="Herbosin Corps office reception"
          className="about-hero-image"
        />
      </section>

      {/* 1. About Herbosin */}
      <section className="about-section">
        <div className="about-container">
          <h1 className="about-title">About Herbosin</h1>
          <p>
            Herbosin was founded in 2008 on a simple premise — that manufacturers of dietary supplements, cosmeceuticals
            and functional foods shouldn’t have to sacrifice quality to make their products affordable. By establishing
            strategic relationships with raw material manufacturers across the globe, buying in volume, and adhering to
            the highest ethics in our business dealings, we are able to secure access to lab-validated premium-quality
            raw materials at discounted prices — including proprietary ingredients you’ll find nowhere else.
          </p>
          <p>
            But Herbosin is more than just a supplier of science-based natural compounds. Consider us your partner in
            developing innovative new products. As a young, lean mid-sized company, Herbosin has the responsiveness and
            resourcefulness bigger companies lack to translate concepts into finished products. Do you need a material
            shipped to you within 24 hours? Help tracking down a hard-to-find herb? An ingredient manufactured to meet
            your custom specifications? If you can dream it, we can help you turn it into reality.
          </p>
        </div>
      </section>

      {/* 2. Customer Satisfaction */}
      <section className="about-section">
        <div className="about-container">
          <h2 className="about-title">Customer Satisfaction</h2>
          <p>
            Whatever your needs, Herbosin is dedicated to providing you with the best possible total purchase experience
            — from product inception to materials delivery, we guarantee your 100% total satisfaction.
          </p>
          <p>
            As a manufacturer of Herbal Formulations, Dietary supplements, cosmeceuticals or functional foods, the
            relationship you have with your raw material suppliers is critical to the success of your business. Your
            dependency on them to make sure the materials they send you are what they say they are. To provide you with
            the cream of the crop — not the bottom of the barrel. To get you what you need, when you need it. To help you
            source exactly what you’re looking for. And to charge you a fair price that allows you to meet your margins.
          </p>
          <p>
            These are the guiding principles behind Herbosin, founded by a group of professionals with 12 years of rich
            experience in the Natural Products Industry. Herbosin is dedicated to being your trusted source for unmatched
            quality, service and pricing.
          </p>
        </div>
      </section>

      {/* 3. The Herbosin Difference */}
      <section className="about-section">
        <div className="about-container">
          <h2 className="about-title">The Herbosin Difference</h2>
          <div className="about-two-column">
            <div>
              <h3 className="about-subtitle">Premium Quality</h3>
              <p>
                Herbosin stocks only premium-quality nutraceuticals, cosmeceuticals, herbal extracts and food
                supplements which are well approved by FDA and accredited by various certificates like Kosher, Halal,
                GMP, HACCP, NABL, ISO, Naturland, and many more which are standards for quality.
              </p>

              <h3 className="about-subtitle">Captive Manufacturing Facility</h3>
              <p>
                Herbosin maintains 100% control over the entire manufacturing process at our captive manufacturing
                facility in India, allowing us to produce materials that meet our strict standards for quality. Through
                our exclusive alliances with other manufacturing partners, we are also able to offer proprietary
                products you won’t find anywhere else.
              </p>

              <h3 className="about-subtitle">Double Testing Program</h3>
              <p>
                Herbosin has full access to a quality control laboratory at our production site, where we routinely
                perform assays and microbiological and heavy metal testing on all our ingredients. We’re so certain of
                the quality of our materials, we’ll happily send any of them to the third-party laboratory of your
                choice, where we’ll have them retested for you at our cost.
              </p>

              <h3 className="about-subtitle">Rapid Delivery</h3>
              <p>
                Herbosin has established a first-class, multi-national logistics system that allows for rapid delivery
                of ingredients anywhere in the world.
              </p>
            </div>
            <div>
              <h3 className="about-subtitle">Commitment to Service</h3>
              <p>
                Herbosin goes the extra mile to meet your needs, whether that’s tracking down a hard-to-find herb or
                manufacturing an ingredient to your individual specifications. And we always adhere to the highest
                ethical standards in all our relations and transactions.
              </p>

              <h3 className="about-subtitle">Affordable Pricing</h3>
              <p>
                Herbosin is able to secure access to premium-quality raw materials at discounted prices, and we pass
                those savings on to you.
              </p>

              <h3 className="about-subtitle">Mission Statement</h3>
              <p>
                Our mission at Herbosin is to promote health, beauty and long life by offering the highest quality,
                lab-validated raw materials for dietary supplements, cosmeceuticals and functional foods, offered at
                competitive prices and supported by unparalleled service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Corporate Ethos & Our Commitment */}
      <section className="about-section">
        <div className="about-container about-two-column">
          <div>
            <h2 className="about-title">Corporate Ethos</h2>
            <div className="about-highlight">
              <p>
                As responsible corporate, we are concerned for the environment and committed to deliver quality products
                that are safe and effective. Our corporate ethos is embodied in our commitment towards nation, society,
                consumers, channel partners and our shareholders.
              </p>
            </div>
          </div>
          <div>
            <h2 className="about-title">Our Commitment</h2>
            <ul className="about-commitment-list">
              <li>To exercise the highest standards of quality control at every step.</li>
              <li>To ensure the highest purity and efficacy in every product that we develop.</li>
              <li>
                To strive to present the absolute truth about our products and their benefits to all our valued
                customers and partners.
              </li>
              <li>To aim to provide customer satisfaction at all times.</li>
              <li>To address every endeavor with total professionalism and integrity.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Quality Policy - Certificate Style */}
      <section className="about-section">
        <div className="about-container">
          <div className="quality-card">
            <div className="quality-logo-wrap">
              <img src="/Assets/Home/Logo.jpg" alt="Herbosin Corps logo" className="quality-logo" />
            </div>
            <h2 className="quality-title">Quality Policy</h2>
            <p>The company’s quality edifice stands on the following pillars:</p>
            <ul className="about-quality-list">
              <li>We are committed to quality compliances in all our deliverables.</li>
              <li>Consistent and continuous quality management.</li>
              <li>Total commitment for customer satisfaction.</li>
              <li>Protection and advancement of environment.</li>
              <li>Sustainable development of stakeholders.</li>
              <li>
                The Management is fully committed to quality and ensures all resources to accomplish this task.
              </li>
              <li>We value our 4C&apos;s – Compliance, Credibility, Consistency and Confidentiality.</li>
              <li>
                At Herbosin, quality is a relentless commitment to continuous improvements in processes and systems, to
                provide consistent quality services to meet our customer requirements.
              </li>
            </ul>
            <p>
              Our commitment to quality is unflinching, our hunger for growth is deep-rooted and our capacity for
              details is amazing. Over the decades, we have demonstrated a rare resilience and fortitude. The Group is
              determined to improve productivity and focus continuously on innovation and up-gradation of its products
              and people.
            </p>
            <div className="quality-card-footer">
              <span>01-01-2009</span>
              <span>Director</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Certificates */}
      <section className="about-section">
        <div className="about-container">
          <h2 className="about-title">Certificates</h2>
          <div className="certificates-grid" role="list">
            {certificates.map(({ src, alt }) => (
              <div key={src} className="certificate-card" role="listitem">
                <div className="certificate-image-wrap">
                  <img src={src} alt={alt} className="certificate-image" loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showTopButton && (
        <button type="button" className="about-back-to-top-floating" onClick={scrollToTop} aria-label="Back to top">
          ↑
        </button>
      )}
    </>
  )
}

