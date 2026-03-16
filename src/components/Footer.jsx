import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer-logo">
          <img src="/Assets/Home/Logo.jpg" alt="Herbosin Corps" />
        </div>
        <div className="footer-details">
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              Facebook
            </a>
            <span className="footer-sep">·</span>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              Instagram
            </a>
          </div>
          <p className="footer-contact">
            <a href="mailto:info@herbosin.com">info@herbosin.com</a>
          </p>
          <p className="footer-address">
            M/s Herbosin Corps<br />
            42 (Angoori Bhawan) Lane 5<br />
            Sainik Colony, Kasampur<br />
            Meerut Cantt – 250001 (U.P) INDIA
          </p>
        </div>
      </div>
    </footer>
  )
}
