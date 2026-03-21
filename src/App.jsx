import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Enquiry from './pages/Enquiry'

const Network = lazy(() => import('./pages/Network'))

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<PlaceholderPage title="Loading..." />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/network" element={<Network />} />
            <Route path="/enquiry" element={<Enquiry />} />
          </Routes>
        </Suspense>
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
