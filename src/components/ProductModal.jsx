import './ProductsPage.css'

export default function ProductModal({ product, isOpen, onClose }) {
  if (!isOpen || !product) return null

  const handleBackdropClick = (e) => {
    if (e.target.dataset.backdrop === 'true') onClose()
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
            <p className="product-modal-text">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

