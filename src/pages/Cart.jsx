import { Link } from "react-router-dom";
import { useCart } from "../store/cart-context";
import "./Cart.css";

export default function Cart() {
  const {
    cart,
    total,
    addToCart,
    decreaseQty,
    removeFromCart,
  } = useCart();

  /* ================= EMPTY CART ================= */
  if (cart.length === 0) {
    return (
      <div className="page cart-empty">
        <div className="empty-box">
          <span className="empty-icon">🛒</span>
          <h1>Your cart is empty</h1>
          <p>
            Looks like you haven’t added anything yet.
            Explore our collection.
          </p>

          <Link to="/products" className="empty-btn btn">
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  /* ================= CART PAGE ================= */
  return (
    <div className="page cart-page">
      <h1 className="cart-title">Your Cart</h1>

      {/* ================= CART LIST ================= */}
      <div className="cart-list">
        {cart.map((item) => (
          <div
            className="cart-item"
            key={`${item.id}-${item.selectedColor}`}
          >
            {/* Image */}
            <img src={item.image} alt={item.name} />

            {/* Info */}
            <div className="cart-info">
              <h3>{item.name}</h3>

              {item.brand && (
                <span className="cart-brand">
                  {item.brand}
                </span>
              )}

              {item.selectedColor && (
                <span className="cart-color">
                  Color: {item.selectedColor}
                </span>
              )}

              {item.code && (
                <span className="cart-code">
                  Code: {item.code}
                </span>
              )}

              <p>{item.price} EGP</p>
            </div>

            {/* Quantity */}
            <div className="cart-qty">
              <button
                onClick={() =>
                  decreaseQty(
                    item.id,
                    item.selectedColor
                  )
                }
              >
                −
              </button>

              <span>{item.qty}</span>

              <button
                onClick={() =>
                  addToCart({
                    ...item,
                    selectedColor:
                      item.selectedColor,
                  })
                }
              >
                +
              </button>
            </div>

            {/* Subtotal */}
            <div className="cart-subtotal">
              {item.price * item.qty} EGP
            </div>

            {/* Remove */}
            <button
              className="remove-btn"
              onClick={() =>
                removeFromCart(
                  item.id,
                  item.selectedColor
                )
              }
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* ================= SUMMARY ================= */}
      <div className="cart-summary">
        <div className="total">
          <span>Total</span>
          <span>{total} EGP</span>
        </div>

        <Link
          to="/checkout"
          className="checkout-btn btn"
        >
          Checkout via WhatsApp →
        </Link>
      </div>
    </div>
  );
}
