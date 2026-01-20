import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import "./Products.css";

export default function Products() {
  return (
    <div className="page products-page">
      
      {/* Header */}
      <div className="products-header">
        <span className="products-tag">COLLECTION</span>
        <h1>Products</h1>
        <p>
          Discover our premium streetwear pieces crafted with purpose,
          identity, and timeless design.
        </p>
      </div>

      {/* Grid */}
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  );
}
