import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { products } from "../data/products";
import { useCart } from "../store/cart-context";
import "./ProductDetails.css";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [loading, setLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState(null);

  const product = products.find((p) => p.id === id);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

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

  /* السعر النهائي */
  const finalPrice =
    product.discountPrice && product.discount > 0
      ? product.discountPrice
      : product.price;

  /* الصورة الحالية */
  const currentImage =
    product.images && selectedColor
      ? product.images[selectedColor]
      : product.images
      ? product.images[product.colors[0]]
      : product.image;

  return (
    <div className="page product-details-page">
      {/* Image */}
      <div className="details-image">
        <img src={currentImage} alt={product.name} />
      </div>

      {/* Info */}
      <div className="details-info">
        <span className="details-brand">
          {product.brand || "VOID"}
        </span>

        <h1 className="details-title">{product.name}</h1>

        {/* Meta */}
        <div className="details-meta">
          {product.size && (
            <div>
              <strong>Size</strong> | {product.size}
            </div>
          )}
          {product.code && (
            <div>
              <strong>Code</strong> | {product.code}
            </div>
          )}
          {product.box && <div>BOX 📦</div>}
        </div>

        {/* Colors */}
        {product.colors && (
          <div className="color-section">
            <span>Color</span>
            <div className="colors">
              {product.colors.map((color) => (
                <button
                  key={color}
                  className={`color-dot ${
                    selectedColor === color ? "active" : ""
                  }`}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Price */}
        <div className="price-box">
          {product.discount > 0 && (
            <>
              <span className="old-price">
                Price | {product.price} EGP ❌
              </span>
              <span className="discount">
                🔥 DISCOUNT {product.discount}% 🔥
              </span>
            </>
          )}
          <span className="new-price">
            Price | {finalPrice} EGP ✅
          </span>
        </div>

        {/* Add to cart */}
        <button
          className="void-btn"
          disabled={product.colors && !selectedColor}
          onClick={() =>
            addToCart({
              ...product,
              selectedColor,
              price: finalPrice,
              image: currentImage,
            })
          }
        >
          {product.colors && !selectedColor
            ? "Select Color First"
            : "Add to Cart →"}
        </button>
      </div>
    </div>
  );
}
