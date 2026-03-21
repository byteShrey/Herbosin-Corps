import { useEffect, useMemo, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useLocation } from 'react-router-dom'
import '../components/EnquiryPage.css'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_p5gqd2k'
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_089ekqj'
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'TFDXmudtY27dzTDFu'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

export default function Enquiry() {
  const location = useLocation()
  const [formData, setFormData] = useState(initialForm)
  const [isSending, setIsSending] = useState(false)
  const [status, setStatus] = useState({ type: '', text: '' })

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const subject = params.get('subject')?.trim()
    if (!subject) return

    setFormData((prev) => ({ ...prev, subject }))
  }, [location.search])

  const canSubmit = useMemo(() => {
    return formData.name.trim() && formData.email.trim() && formData.subject.trim() && formData.message.trim()
  }, [formData])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: '', text: '' })

    if (!canSubmit) {
      setStatus({ type: 'error', text: 'Please fill all required fields before submitting.' })
      return
    }

    try {
      setIsSending(true)
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name.trim(),
          from_email: formData.email.trim(),
          phone: formData.phone.trim() || 'N/A',
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          to_email: 'hed@herbosin.com',
          submitted_at: new Date().toLocaleString(),
        },
        EMAILJS_PUBLIC_KEY,
      )

      setStatus({ type: 'success', text: 'Thanks for contacting us. Your enquiry has been sent successfully.' })
      setFormData(initialForm)
    } catch {
      setStatus({
        type: 'error',
        text: 'Unable to send your enquiry right now. Please try again in a few minutes.',
      })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section className="enquiry-page">
      <div className="enquiry-hero-wrap">
        <img src="/Assets/Contact%20us/ContactUs.jpeg" alt="Herbosin Corps contact office" className="enquiry-hero" />
      </div>

      <div className="enquiry-content">
        <h1 className="enquiry-title">Contact Us</h1>

        <div className="enquiry-row enquiry-row-top">
          <div className="enquiry-block enquiry-col">
            <h2>Address</h2>
            <p>
              M/s Herbosin Corps
              <br />
              42 (Angoori Bhawan) Lane 5
              <br />
              Sainik Colony, Kasampur
              <br />
              Meerut Cantt - 250001 (U.P) INDIA
            </p>
          </div>

          <div className="enquiry-block enquiry-col enquiry-meta">
            <p>
              <strong>Handy:</strong> +91-9258077263
            </p>
            <p>
              <strong>WhatsApp:</strong> +91-9258077263
            </p>
            <p>
              <strong>Email:</strong> info@herbosin.com
            </p>
          </div>

          <div className="enquiry-block enquiry-col">
            <h2>Mr. Ajay Kumar Sharma</h2>
            <p>(Head - Marketing)</p>
            <p>
              <strong>E-mail:</strong> ajay@herbosin.com
            </p>
            <p>
              <strong>Skype:</strong> herbosin
            </p>
          </div>
        </div>

        <div className="enquiry-row enquiry-row-middle">
          <div className="enquiry-block enquiry-dept-block">
            <h2>Department Emails</h2>
            <table className="enquiry-dept-table">
              <thead>
                <tr>
                  <th>Department</th>
                  <th>Emails</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Personal</td>
                  <td>
                    <a href="mailto:ajay@herbosin.com">ajay@herbosin.com</a>
                  </td>
                </tr>
                <tr>
                  <td>Purchase</td>
                  <td>
                    <a href="mailto:purchase@herbosin.com">purchase@herbosin.com</a>
                  </td>
                </tr>
                <tr>
                  <td>Accounts</td>
                  <td>
                    <a href="mailto:accounts@herbosin.com">accounts@herbosin.com</a>
                  </td>
                </tr>
                <tr>
                  <td>Admin</td>
                  <td>
                    <a href="mailto:info@herbosin.com">info@herbosin.com</a>
                  </td>
                </tr>
                <tr>
                  <td>Contact Us</td>
                  <td>
                    <a href="mailto:hed@herbosin.com">hed@herbosin.com</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="enquiry-row enquiry-row-bottom">
          <div className="enquiry-form-card">
            <h2>Send Your Enquiry</h2>
            <p className="enquiry-form-subtitle">We usually respond within 24 working hours.</p>

            <form className="enquiry-form" onSubmit={handleSubmit}>
              <label>
                Name <span>*</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </label>

              <label>
                Email <span>*</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </label>

              <label>
                Phone Number <small>(optional)</small>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
              </label>

              <label>
                Subject <span>*</span>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  required
                />
              </label>

              <label>
                Message <span>*</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message"
                  rows={4}
                  required
                />
              </label>

              <button type="submit" disabled={isSending || !canSubmit}>
                {isSending ? 'Sending...' : 'Submit Enquiry'}
              </button>

              {status.text && (
                <p className={`enquiry-status ${status.type === 'success' ? 'enquiry-success' : 'enquiry-error'}`}>
                  {status.text}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
