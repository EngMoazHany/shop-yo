import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../store/cart-context";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  /* =======================
     Color State
  ======================= */
  const hasColors = product.colors && product.colors.length > 0;
  const [selectedColor, setSelectedColor] = useState(
    hasColors ? product.colors[0] : null
  );

  /* =======================
     Image Logic
  ======================= */
  const image =
    product.images && selectedColor
      ? product.images[selectedColor]
      : product.image;

  /* =======================
     Price Logic
  ======================= */
  const finalPrice =
    product.discountPrice ?? product.price;

  /* =======================
     Add To Cart
  ======================= */
  const handleAddToCart = () => {
    if (hasColors && !selectedColor) return;

    addToCart({
      ...product,
      selectedColor,
      image,
      price: finalPrice,
    });
  };

  return (
    <div className="product-card">
      {/* Image */}
      <Link
        to={`/products/${product.id}`}
        className="product-image"
      >
        <img src={image} alt={product.name} />
      </Link>

      {/* Info */}
      <div className="product-info">
        {/* Brand */}
        {product.brand && (
          <span className="product-brand">
            {product.brand}
          </span>
        )}

        {/* Name */}
        <h3>{product.name}</h3>

        {/* Price */}
        <div className="price">
          {product.discountPrice ? (
            <>
              <span className="old-price">
                {product.price} EGP
              </span>
              <span className="new-price">
                {product.discountPrice} EGP
              </span>
            </>
          ) : (
            <span>{product.price} EGP</span>
          )}
        </div>

        {/* Colors */}
        {hasColors && (
          <div className="color-picker">
            {product.colors.map((color) => (
              <button
                key={color}
                className={`color-dot ${
                  selectedColor === color
                    ? "active"
                    : ""
                }`}
                style={{ background: color.toLowerCase() }}
                onClick={() => setSelectedColor(color)}
                aria-label={color}
              />
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="card-actions">
          <Link
            to={`/products/${product.id}`}
            className="view-btn"
          >
            View
          </Link>

          <button
            className="void-btn"
            onClick={handleAddToCart}
          >
            Add to Cart →
          </button>
        </div>
      </div>
    </div>
  );
}
