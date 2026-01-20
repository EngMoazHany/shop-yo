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

  if (cart.length === 0) {
    return (
      <div className="page cart-empty">
        <h1>Your cart is empty</h1>
        <Link to="/products" className="empty-btn btn">
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="page cart-page">
      <h1 className="cart-title">Your Cart</h1>

      <div className="cart-list">
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />

            <div className="cart-info">
              <h3>{item.name}</h3>
              <p>{item.price} EGP</p>
            </div>

            <div className="cart-qty">
              <button onClick={() => decreaseQty(item.id)}>-</button>
              <span>{item.qty}</span>
              <button onClick={() => addToCart(item)}>+</button>
            </div>

            <div className="cart-subtotal">
              {item.price * item.qty} EGP
            </div>

            <button
              className="remove-btn"
              onClick={() => removeFromCart(item.id)}
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="total">
          <span>Total</span>
          <span>{total} EGP</span>
        </div>

        <Link to="/checkout" className="checkout-btn btn">
          Checkout via WhatsApp →
        </Link>
      </div>
    </div>
  );
}
