import './ProductsPage.css'

export default function ProductModal({ product, isOpen, onClose, onEnquire }) {
  if (!isOpen || !product) return null

  const descriptionLines = (product.description || '')
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0)

  const headerLine = descriptionLines[0] || ''

  let metaLine = ''
  let bulletStartIndex = 1

  if (descriptionLines[1] && !descriptionLines[1].startsWith('•')) {
    metaLine = descriptionLines[1]
    bulletStartIndex = 2
  }

  const bulletLines = descriptionLines.slice(bulletStartIndex).map((line) => line.replace(/^•\s*/, ''))

  const handleBackdropClick = (e) => {
    if (e.target.dataset.backdrop === 'true') onClose()
  }

  const handleEnquireClick = () => {
    if (!onEnquire || !product) return
    onEnquire(product)
  }

  return (
    <div
      className="product-modal-backdrop"
      data-backdrop="true"
      onClick={handleBackdropClick}
      role="presentation"
    >
      <div className="product-modal" role="dialog" aria-modal="true" aria-label={product.name}>
        <button type="button" className="product-modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <div className="product-modal-body">
          <div className="product-modal-image-wrap">
            <img src={product.imageSrc} alt={product.name} className="product-modal-image" />
          </div>
          <div className="product-modal-content">
            <h3 className="product-modal-title">{product.name}</h3>
            {headerLine && <h4 className="product-modal-subtitle">{headerLine}</h4>}
            {metaLine && <p className="product-modal-meta">{metaLine}</p>}
            {bulletLines.length > 0 && (
              <ul className="product-modal-list">
                {bulletLines.map((line, index) => (
                  <li key={index} className="product-modal-list-item">
                    {line}
                  </li>
                ))}
              </ul>
            )}
            <button type="button" className="product-modal-enquire-btn" onClick={handleEnquireClick}>
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

