import './ProductsPage.css'

export default function ProductCategoryCard({ title, imageSrc, onClick, isActive }) {
  return (
    <button
      type="button"
      className={`product-category-card ${isActive ? 'product-category-card-active' : ''}`}
      onClick={onClick}
    >
      <div className="product-category-image-wrap">
        <img src={imageSrc} alt={title} className="product-category-image" />
      </div>
      <div className="product-category-title">{title}</div>
    </button>
  )
}

