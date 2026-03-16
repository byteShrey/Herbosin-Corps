import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">
          <img src="/Assets/Home/Logo.jpg" alt="Herbosin Corps" />
        </div>
        <div className="footer-right">
          <a href="mailto:info@herbosin.com" className="footer-email">info@herbosin.com</a>
          <span className="footer-sep">|</span>
          <span className="footer-address-inline">M/s Herbosin Corps, 42 (Angoori Bhawan) Lane 5, Sainik Colony, Kasampur, Meerut Cantt – 250001 (U.P) INDIA</span>
        </div>
      </div>
    </footer>
  )
}
