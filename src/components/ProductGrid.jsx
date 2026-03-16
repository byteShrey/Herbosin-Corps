import './ProductsPage.css'

export default function ProductGrid({ title, products, onProductClick }) {
  if (!products || products.length === 0) return null

  return (
    <section className="product-grid-section">
      <div className="products-container">
        <h2 className="product-grid-title">{title}</h2>
        <div className="product-grid">
          {products.map((product) => (
            <button
              key={product.id}
              type="button"
              className="product-card"
              onClick={() => onProductClick(product)}
            >
              <div className="product-card-image-wrap">
                <img src={product.imageSrc} alt={product.name} className="product-card-image" />
              </div>
              <div className="product-card-name">{product.name}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

