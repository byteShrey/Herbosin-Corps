import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<PlaceholderPage title="About Us" />} />
          <Route path="/products" element={<PlaceholderPage title="Products" />} />
          <Route path="/network" element={<PlaceholderPage title="Network" />} />
          <Route path="/enquiry" element={<PlaceholderPage title="Enquiry" />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

function PlaceholderPage({ title }) {
  return (
    <section className="gradient-bg" style={{ minHeight: '60vh', padding: '4rem 1rem', textAlign: 'center' }}>
      <h1 style={{ color: 'var(--green-primary)', marginBottom: '1rem' }}>{title}</h1>
      <p>Page coming soon.</p>
    </section>
  )
}

export default App
