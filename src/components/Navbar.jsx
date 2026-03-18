import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/products', label: 'Products' },
  { path: '/network', label: 'Network' },
  { path: '/enquiry', label: 'Contact US' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
          <img src="/Assets/Home/Logo.jpg" alt="Herbosin Corps" />
        </Link>

        <button
          type="button"
          className="navbar-toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>

        <nav className={`navbar-links ${menuOpen ? 'navbar-links-open' : ''}`}>
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className="navbar-link"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
      {menuOpen && (
        <div
          className="navbar-backdrop"
          role="button"
          tabIndex={0}
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
          onKeyDown={(e) => e.key === 'Escape' && setMenuOpen(false)}
        />
      )}
    </header>
  )
}
