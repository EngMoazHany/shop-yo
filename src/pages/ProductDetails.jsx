import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { products } from "../data/products";
import { useCart } from "../store/cart-context";
import "./ProductDetails.css";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [loading, setLoading] = useState(true);

  const product = products.find((p) => p.id === id);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  /* Skeleton */
  if (loading) {
    return (
      <div className="page product-details-page">
        <div className="skeleton-image" />
        <div className="skeleton-info">
          <div className="skeleton-line small" />
          <div className="skeleton-line large" />
          <div className="skeleton-line medium" />
          <div className="skeleton-line price" />
          <div className="skeleton-btn" />
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="page product-not-found">
        <h1>Product not found</h1>
      </div>
    );
  }

  return (
    <div className="page product-details-page">
      
      {/* Image */}
      <div className="details-image">
        <img src={product.image} alt={product.name} />
      </div>

      {/* Info */}
      <div className="details-info">
        <span className="details-category">
          {product.category || "VOID COLLECTION"}
        </span>

        <h1 className="details-title">{product.name}</h1>

        <p className="details-description">
          {product.description ||
            "Premium streetwear piece crafted with attention to detail, identity, and timeless design."}
        </p>

        <div className="details-price">
          {product.price} EGP
        </div>

        <button
          className="void-btn"
          onClick={() => addToCart(product)}
        >
          Add to Cart →
        </button>
      </div>

    </div>
  );
}
