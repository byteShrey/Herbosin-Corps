import './ExhibitionsMarquee.css'

const exhibitions = [
  { name: 'Vitafoods India 2026', place: 'Mumbai INDIA', date: 'Feb 11-13, 2026' },
  { name: 'Natural Products Expo West 2026', place: 'Anaheim, CA (USA)', date: 'March 4-6, 2026' },
  { name: 'Supply Side East 2026', place: 'Secaucus, NJ (USA)', date: 'April 14-15, 2026' },
  { name: 'Vitafoods International 2026', place: 'Fira Barcelona Gran Via, Barcelona, Spain', date: 'May 5-7, 2026' },
  { name: 'Supply Side West 2026', place: 'Las Vegas, NV (USA)', date: 'November 5-9, 2026' },
]

function ExhibitionItem({ name, place, date }) {
  return (
    <span className="marquee-item">
      <strong>{name}</strong> — {place} — {date}
    </span>
  )
}

export default function ExhibitionsMarquee() {
  const row = exhibitions.map((e, i) => <ExhibitionItem key={i} {...e} />)
  return (
    <section className="exhibitions gradient-bg-reverse">
      <div className="container">
        <h2 className="exhibitions-title">Exhibitions</h2>
      </div>
      <div className="marquee-wrap">
        <div className="marquee-track">
          {row}
          {row}
        </div>
      </div>
    </section>
  )
}
