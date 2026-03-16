import { useState, useMemo } from 'react'
import ProductCategoryCard from '../components/ProductCategoryCard'
import ProductGrid from '../components/ProductGrid'
import ProductModal from '../components/ProductModal'
import { essentialOils, herbalExtracts, naturalFoodColors, phytochemicals } from '../data/products'
import '../components/ProductsPage.css'

const categories = [
  {
    id: 'essentialOils',
    title: 'Essential Oils',
    imageSrc: '/Assets/Products/Essential.png',
  },
  {
    id: 'herbalExtracts',
    title: 'Herbal Extracts',
    imageSrc: '/Assets/Products/Herbal.png',
  },
  {
    id: 'naturalFoodColors',
    title: 'Natural Food Colors',
    imageSrc: '/Assets/Products/Food_Color.png',
  },
  {
    id: 'phytochemicals',
    title: 'Phytochemicals',
    imageSrc: '/Assets/Products/Phyto.png',
  },
]

const categoryDataMap = {
  essentialOils: essentialOils,
  herbalExtracts: herbalExtracts,
  naturalFoodColors: naturalFoodColors,
  phytochemicals: phytochemicals,
}

export default function Products() {
  const [selectedCategoryId, setSelectedCategoryId] = useState('essentialOils')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const currentCategory = useMemo(
    () => categories.find((c) => c.id === selectedCategoryId),
    [selectedCategoryId],
  )

  const currentProducts = categoryDataMap[selectedCategoryId] || []

  const handleProductClick = (product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  return (
    <>
      <section className="products-intro-section gradient-bg">
        <div className="products-container">
          <h1 className="products-intro-title">Our Product Portfolio</h1>
          <p>
            At Herbosin Corps, we offer a carefully curated range of natural ingredients designed to meet the needs of
            industries that rely on high-quality botanical solutions. Our product portfolio focuses on four key
            categories: herbal extracts, phytochemicals, essential oils, and natural food colours, each sourced and
            processed with a strong emphasis on purity, consistency, and reliability.
          </p>
          <p>
            These ingredients are widely used across the nutraceutical, pharmaceutical, food, cosmetic, and wellness
            industries, where quality and authenticity are essential. Through our strong supplier network and
            quality-focused processing, Herbosin Corps ensures that every product delivers dependable performance while
            maintaining the natural integrity of the source materials.
          </p>
        </div>
      </section>

      <section className="products-categories-section">
        <div className="products-container">
          <h2 className="products-section-title">Explore Our Key Categories</h2>
          <div className="products-category-grid">
            {categories.map((category) => (
              <ProductCategoryCard
                key={category.id}
                title={category.title}
                imageSrc={category.imageSrc}
                isActive={category.id === selectedCategoryId}
                onClick={() => setSelectedCategoryId(category.id)}
              />
            ))}
          </div>
        </div>
      </section>

      <ProductGrid
        title={currentCategory?.title || ''}
        products={currentProducts}
        onProductClick={handleProductClick}
      />

      <section className="extraction-section">
        <div className="extraction-diagram-wrap">
          <img
            src="/Assets/Products/Diagram.png"
            alt="Herbal extraction process flow diagram"
            className="extraction-diagram"
          />
        </div>
        <div className="products-container extraction-text">
          <h2 className="products-section-title">Extraction Process</h2>
          <p>
            Plant extraction is a process that aims to extract certain components present in plants. It is a solid/liquid
            separation operation: a solid object (the plant) is placed in contact with a fluid (the solvent). The plant
            components of interest are then solubilised and contained within the solvent. The solution thus obtained is
            the desired extract. The solvent will eventually be eliminated to isolate the plant extract. If it is for the
            food industry, it is not necessary to separate it from the extract. If not, a second separation operation makes
            it possible to obtain a dry extract. Nowadays, the term “extract” is frequently used incorrectly. In fact, only
            solid/liquid extraction is capable of producing them, but sometimes simple crushed plant powders are marketed as
            “extracts”.
          </p>
          <p>
            The origin of the extraction of active plant ingredients has been lost to time. It was in fact very early on
            that mankind discovered the benefits of plants and the first techniques for separating out what we now refer to
            as “extracts”. The first extracts were essentially obtained through aqueous extraction or alcoholic
            fermentation, and according to procedures such as infusion, maceration, decoction and hydro distillation. The
            simplicity of these procedures, as well as the tools, materials and heating methods of the time, meant that the
            extractor was a man of the arts rather than a scientist.
          </p>
          <p>
            Today, this activity calls upon the use of precise automatons and adapted materials. It has benefited from
            advances in process engineering, phytochemistry and analytics. Moreover, new technologies to assist extraction
            (high-pressure, microwaves, ultrasound, etc.) are being developed. However, the notion of expertise in plant
            extraction remains to this day a balanced combination of the mastery of technical parameters, and tradition.
          </p>
        </div>
      </section>

      <ProductModal product={selectedProduct} isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  )
}

