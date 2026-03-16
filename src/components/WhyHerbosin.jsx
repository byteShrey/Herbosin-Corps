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
    <section className="why-herbosin">
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
            One of Herbosin Corp’s key strengths is our extensive network of growers, suppliers, and industry partners across multiple regions. These long-standing relationships allow us to source the finest botanical raw materials directly from trusted sources.

            Our strong network ensures:

            Reliable sourcing of premium herbal ingredients

            Consistent quality and supply stability

            Transparent and efficient supply chains

            Strong partnerships with global clients

            Through this network, Herbosin Corp connects nature’s resources with global markets. 
          </p>
        </div>
        <div className="why-block">
          <h3 className="why-subtitle">BACKWARD INTEGRATION</h3>
          <p>
            Herbosin Corps operates with a backward integrated supply chain that connects cultivation, sourcing, and manufacturing. By building strong relationships with farmers and botanical suppliers, we ensure the availability of high quality raw materials while maintaining transparency and sustainability throughout the supply process.

            This approach enables us to deliver reliable herbal extracts, phytochemicals, essential oils, and natural food ingredients to industries worldwide.

            Through close collaboration with our cultivation partners, we are able to monitor the entire process from the careful selection of plant species to harvesting, processing, and final production. This level of integration allows us to maintain strict quality standards while ensuring consistency in every batch we supply.

            Our backward integration model also supports responsible and sustainable agricultural practices. By working directly with growers, we promote ethical sourcing, environmental sustainability, and long-term partnerships that benefit both the farming communities and the industries we serve.

            At Herbosin Corps, this integrated approach not only strengthens our supply chain but also ensures that our customers receive natural ingredients that meet the highest standards of purity, safety, and reliability. 
          </p>
        </div>
      </div>
    </section>
  )
}
