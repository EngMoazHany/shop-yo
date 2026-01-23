import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import "./Products.css";

export default function Products() {
  return (
    <div className="page products-page">
      
      {/* Header */}
      <div className="products-header">
        <span className="products-tag">THE COLLECTION</span>

        <h1>Curated Luxury</h1>

        <p>
          Explore our carefully selected collection of premium designer bags,
          where timeless elegance meets refined craftsmanship.
          Each piece is chosen to reflect sophistication, authenticity,
          and lasting value.
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
