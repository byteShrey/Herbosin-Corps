import './WhyHerbosin.css'

export default function WhyHerbosin() {
  const bullets = [
    'Natural and safe products',
    'Wide range of products & Efficient R&D',
    'Industry leading prices',
    'Timely Deliveries with Customer Satisfaction',
    'World class infrastructure',
  ]

  return (
    <section className="why-herbosin gradient-bg">
      <div className="container">
        <h2 className="why-title">Why Herbosin</h2>
        <ul className="why-list">
          {bullets.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <div className="why-block">
          <h3 className="why-subtitle">STRONG NETWORKING</h3>
          <p>
            We have strong networks within the country and as well as in international markets to
            help in marketing in various states of India and abroad. Our strong and efficient
            logistic support system helps in timely delivery of products. All of this has won us
            an esteemed clientele throughout the world.
          </p>
        </div>
        <div className="why-block">
          <h3 className="why-subtitle">BACKWARD INTEGRATION</h3>
          <p>
            Apart of the purely commercial vision, the company feels its responsibility towards
            mankind and thus promotes cultivation of medicinal plants for the benefit of our
            farmers, by providing them the available technical know-how and buy back assurance
            of cultivated products. Besides this, company is having a robust agro-tech department
            where a team of agronomists develop and simplify the technology for mass cultivation
            of medicinal and aromatic plants.
          </p>
        </div>
      </div>
    </section>
  )
}
