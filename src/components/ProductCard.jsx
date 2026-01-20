import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      
      {/* Image */}
      <Link to={`/products/${product.id}`} className="product-image">
        <img src={product.image} alt={product.name} />
      </Link>

      {/* Info */}
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="price">{product.price} EGP</p>

        <Link to={`/products/${product.id}`} className="view-btn">
          View Details
        </Link>
      </div>

    </div>
  );
}
