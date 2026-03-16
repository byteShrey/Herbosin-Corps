import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { networkLocations } from '../data/networkLocations'
import '../components/NetworkPage.css'

// Fix default marker icon in Vite/bundler
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
})

export default function Network() {
  return (
    <>
      <section className="network-intro">
        <div className="network-container">
          <h1 className="network-title">Our Network</h1>
          <p>
            Herbosin Corps has built a strong distribution and logistics network to serve customers across multiple
            regions. We partner with trusted channels and ensure timely delivery of premium herbal extracts,
            phytochemicals, essential oils, and natural food ingredients to key markets worldwide. Our presence
            in these locations allows us to support your supply chain needs with reliability and consistency.
          </p>
        </div>
      </section>

      <section className="network-map-section">
        <div className="network-container">
          <h2 className="network-subtitle">Where We Ship</h2>
          <div className="network-map-wrap">
            <MapContainer
              center={[20, 0]}
              zoom={2}
              className="network-map"
              scrollWheelZoom={true}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {networkLocations.map((loc, i) => (
                <Marker key={i} position={[loc.lat, loc.lng]}>
                  <Popup>
                    <strong>{loc.city}, {loc.country}</strong>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </section>
    </>
  )
}
